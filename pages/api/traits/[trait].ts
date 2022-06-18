import type { NextApiRequest, NextApiResponse } from "next";
import { existsSync, readdirSync } from "fs";
import { join } from "path";
import { traitsDirectory } from "@config/api";
import { ApiError, Variant } from "@config/api/types";

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

  const variants = readdirSync(variantsDirectory).map((name) =>
    name.replace(".svg", "")
  );

  res.status(200).json(variants);
}
