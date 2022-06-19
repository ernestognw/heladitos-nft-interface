import type { NextApiRequest, NextApiResponse } from "next";
import { join } from "path";
import { traitsDirectory } from "@config/api";
import { Traits } from "@config/types";
import { readSvgs, removeSvg } from "@config/api/utils";

export const getTraits = (): Traits => {
  const traitsNames = readSvgs(traitsDirectory);

  const traits = traitsNames.reduce((acc: Traits, traitName: string) => {
    acc[traitName] = readSvgs(join(traitsDirectory, traitName)).map(removeSvg);
    return acc;
  }, {});

  return traits;
};

const handler = (_: NextApiRequest, res: NextApiResponse<Traits>) =>
  res.status(200).json(getTraits());

export default handler;
