import type { NextApiRequest, NextApiResponse } from "next";
import { existsSync } from "fs";
import { join } from "path";
import { traitsDirectory } from "@config/api";
import { ApiError, Variant } from "@config/api/types";
import { readSvgs, removeSvg } from "@config/api/utils";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Variant | ApiError>
) {
  const { trait } = req.query;

  const variantsDirectory = join(traitsDirectory, trait as string);

  if (!existsSync(variantsDirectory))
    return res
      .status(404)
      .json({ code: 404, message: `Trait ${trait} does not exist` });

  const variants = readSvgs(variantsDirectory).map(removeSvg);

  res.status(200).json(variants);
}
