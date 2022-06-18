import type { NextApiRequest, NextApiResponse } from "next";
import { readdirSync } from "fs";
import { join } from "path";
import { traitsDirectory } from "@config/api";
import { Traits } from "@config/api/types";

export default function handler(
  _: NextApiRequest,
  res: NextApiResponse<Traits>
) {
  const traitsNames = readdirSync(traitsDirectory);

  const traits = traitsNames.reduce(
    (acc: Traits, traitName: string) => {
      acc[traitName] = readdirSync(join(traitsDirectory, traitName)).map(
        (name) => name.replace(".svg", "")
      );
      return acc;
    },
    {}
  );

  res.status(200).json(traits);
}
