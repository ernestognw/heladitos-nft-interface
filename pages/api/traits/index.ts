import type { NextApiRequest, NextApiResponse } from "next";
import { join } from "path";
import { traitsDirectory } from "@config/api";
import { Traits } from "@config/api/types";
import { readSvgs, removeSvg } from "@config/api/utils";

export default function handler(
  _: NextApiRequest,
  res: NextApiResponse<Traits>
) {
  const traitsNames = readSvgs(traitsDirectory);

  const traits = traitsNames.reduce((acc: Traits, traitName: string) => {
    acc[traitName] = readSvgs(join(traitsDirectory, traitName)).map(removeSvg);
    return acc;
  }, {});

  res.status(200).json(traits);
}
