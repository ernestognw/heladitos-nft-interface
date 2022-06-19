import type { NextApiRequest, NextApiResponse } from "next";
import { existsSync } from "fs";
import { join } from "path";
import { traitsDirectory } from "@config/api";
import { Variant } from "@config/types";
import { readSvgs, removeSvg } from "@config/api/utils";
import { ApiError } from "@config/api/types";

const getVariants = (trait: string) => {
  const variantsDirectory = join(traitsDirectory, trait);

  if (!existsSync(variantsDirectory)) throw new Error();

  return readSvgs(variantsDirectory).map(removeSvg);
};

const handler = (
  req: NextApiRequest,
  res: NextApiResponse<Variant | ApiError>
) => {
  const { trait } = req.query;
  try {
    res.status(200).json(getVariants(trait as string));
  } catch (err) {
    res
      .status(404)
      .json({ code: 404, message: `Trait ${trait} does not exist` });
  }
};

export default handler;
