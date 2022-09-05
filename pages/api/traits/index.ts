import type { NextApiRequest, NextApiResponse } from "next";
import { resolve } from "path";
import { traitsDirectory } from "@config/api";
import { Traits } from "@config/types";
import { notAllowedMethod, readSvgs, removeSvg } from "@config/api/utils";

export const getTraits = (): Traits => {
  const traitsNames = readSvgs(traitsDirectory);

  const traits = traitsNames.reduce((acc: Traits, traitName: string) => {
    acc[traitName] = readSvgs(resolve(traitsDirectory, traitName)).map(
      removeSvg
    );
    return acc;
  }, {});

  return traits;
};

const handler = (req: NextApiRequest, res: NextApiResponse<Traits>) => {
  const { method } = req;

  switch (method) {
    case "GET":
      return res.status(200).json(getTraits());
    default:
      return notAllowedMethod(req, res, ["GET"]);
  }
};

export default handler;
