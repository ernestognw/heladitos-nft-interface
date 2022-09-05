import type { NextApiRequest, NextApiResponse } from "next";
import { existsSync, readFileSync } from "fs";
import { resolve } from "path";
import { orderFile, traitsDirectory } from "@config/api";
import { SelectedTraits } from "@config/types";
import { toHtml } from "hast-util-to-html";
import { ElementNode, parse } from "svg-parser";
import { Root, ElementContent } from "hast";
import {
  appendSvg,
  notAllowedMethod,
  readSvgs,
  removeSvg,
} from "@config/api/utils";

export const getValidTraits = (query: {
  [key: string]: string | string[];
}): SelectedTraits =>
  Object.entries(query).reduce(
    (acc: SelectedTraits, [trait, variant]: [string, typeof query[string]]) => {
      // Check if the trait exists. Otherwise, omit
      const traitDirectory = resolve(traitsDirectory, trait);
      if (!existsSync(traitDirectory)) return acc;

      // If variant is array, omit
      if (Array.isArray(variant)) return acc;

      // Check if variant exist, otherwise, omit.
      const variantDirectory = resolve(
        traitsDirectory,
        trait,
        appendSvg(variant)
      );
      if (!existsSync(variantDirectory)) return acc;

      acc[trait] = variant;

      return acc;
    },
    {}
  );

export const getCompletedTraits = (validTraits: SelectedTraits) => {
  const completedTraits = {
    ...validTraits,
  };
  // Complete every missing trait with a default
  const traitsNames = readSvgs(traitsDirectory);
  traitsNames.forEach((trait) => {
    if (!completedTraits[trait])
      completedTraits[trait] = removeSvg(
        readSvgs(resolve(traitsDirectory, trait))[0]
      );
  });

  return completedTraits;
};

const getSVGElements = (completedTraits: SelectedTraits): ElementContent[] =>
  Object.entries(completedTraits)
    .sort(([traitA], [traitB]) => {
      const pathA = resolve(traitsDirectory, traitA, orderFile);
      const pathB = resolve(traitsDirectory, traitB, orderFile);

      const orderA = existsSync(pathA) ? Number(readFileSync(pathA) ?? 0) : 0;
      const orderB = existsSync(pathB) ? Number(readFileSync(pathB) ?? 0) : 0;

      return orderA - orderB;
    })
    .map(([trait, variant]) => {
      const file = readFileSync(
        resolve(traitsDirectory, trait, appendSvg(variant))
      );

      // This is horrible I know
      return (parse(file.toString()).children[0] as ElementNode)
        .children as unknown as ElementContent;
    })
    .flat();

const getMergedSVG = (svgElements: ElementContent[]): string => {
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
  return toHtml(hastNode);
};

export const getSvgFromQuery = (query: NextApiRequest["query"]) => {
  const validTraits = getValidTraits(query);
  const completedTraits = getCompletedTraits(validTraits);
  const svgElements = getSVGElements(completedTraits);
  return getMergedSVG(svgElements);
};

const handleGet = (req: NextApiRequest, res: NextApiResponse<string>) => {
  const { query } = req;
  const mergedSvg = getSvgFromQuery(query);

  res.setHeader("Content-Type", "image/svg+xml");
  res.status(200).write(mergedSvg);
  return res.end();
};

const handler = (req: NextApiRequest, res: NextApiResponse<string>) => {
  const { method } = req;

  switch (method) {
    case "GET":
      return handleGet(req, res);
    default:
      return notAllowedMethod(req, res, ["GET"]);
  }
};

export default handler;
