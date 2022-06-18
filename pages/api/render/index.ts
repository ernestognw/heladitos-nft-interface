import type { NextApiRequest, NextApiResponse } from "next";
import { existsSync, readdirSync, readFileSync } from "fs";
import { join } from "path";
import { order, traitsDirectory } from "@config/api";
import { SelectedTraits } from "@config/api/types";
import { toHtml } from "hast-util-to-html";
import { ElementNode, parse } from "svg-parser";
import { Root, ElementContent } from "hast";

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
      const variantDirectory = join(traitsDirectory, trait, `${variant}.svg`);
      if (!existsSync(variantDirectory)) return acc;

      acc[trait] = variant;

      return acc;
    },
    {}
  );

  // Complete every missing trait with a default
  const traitsNames = readdirSync(traitsDirectory);
  traitsNames.forEach((trait) => {
    if (!validTraits[trait])
      validTraits[trait] = readdirSync(join(traitsDirectory, trait))[0].replace(
        ".svg",
        ""
      );
  });

  const svgElements: ElementContent[] = Object.entries(validTraits)
    .sort(([traitA], [traitB]) => order[traitB] - order[traitA])
    .map(([trait, variant]) => {
      const file = readFileSync(join(traitsDirectory, trait, `${variant}.svg`));

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
