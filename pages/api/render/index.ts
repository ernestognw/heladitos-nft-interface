import type { NextApiRequest, NextApiResponse } from "next";
import { existsSync, readFileSync } from "fs";
import { join } from "path";
import { orderFile, traitsDirectory } from "@config/api";
import { SelectedTraits } from "@config/types";
import { toHtml } from "hast-util-to-html";
import { ElementNode, parse } from "svg-parser";
import { Root, ElementContent } from "hast";
import { appendSvg, readSvgs, removeSvg } from "@config/api/utils";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<string>
) {
  const { query } = req;

  const validTraits = Object.entries(query).reduce(
    (acc: SelectedTraits, [trait, variant]: [string, typeof query[string]]) => {
      // Check if the trait exists. Otherwise, omit
      const traitDirectory = join(traitsDirectory, trait);
      if (!existsSync(traitDirectory)) return acc;

      // If variant is array, omit
      if (Array.isArray(variant)) return acc;

      // Check if variant exist, otherwise, omit.
      const variantDirectory = join(traitsDirectory, trait, appendSvg(variant));
      if (!existsSync(variantDirectory)) return acc;

      acc[trait] = variant;

      return acc;
    },
    {}
  );

  // Complete every missing trait with a default
  const traitsNames = readSvgs(traitsDirectory);
  traitsNames.forEach((trait) => {
    if (!validTraits[trait])
      validTraits[trait] = removeSvg(readSvgs(join(traitsDirectory, trait))[0]);
  });

  const svgElements: ElementContent[] = Object.entries(validTraits)
    .sort(
      ([traitA], [traitB]) =>
        Number(readFileSync(join(traitsDirectory, traitA, orderFile)) ?? 0) -
        Number(readFileSync(join(traitsDirectory, traitB, orderFile)) ?? 0)
    )
    .map(([trait, variant]) => {
      const file = readFileSync(
        join(traitsDirectory, trait, appendSvg(variant))
      );

      // This is horrible I know
      return (parse(file.toString()).children[0] as ElementNode)
        .children as unknown as ElementContent;
    })
    .flat();

  const hastNode: Root = {
    type: "root",
    children: [
      {
        type: "element",
        tagName: "svg",
        properties: {
          width: 1000,
          height: 1000,
          viewBox: "0 0 1000 1000",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
        },
        children: svgElements,
      },
    ],
  };

  res.setHeader("Content-Type", "image/svg+xml");
  res.status(200).write(toHtml(hastNode));
  res.end();
}
