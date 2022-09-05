import type { NextApiRequest, NextApiResponse } from "next";
import { existsSync } from "fs";
import { resolve } from "path";
import { traitsDirectory } from "@config/api";
import { Variant } from "@config/types";
import { notAllowedMethod, readSvgs, removeSvg } from "@config/api/utils";
import { ApiError } from "@config/api/types";

const getVariants = (trait: string) => {
  const variantsDirectory = resolve(traitsDirectory, trait);

  if (!existsSync(variantsDirectory)) throw new Error();

  return readSvgs(variantsDirectory).map(removeSvg);
};

const handleGet = (
  req: NextApiRequest,
  res: NextApiResponse<Variant | ApiError>
) => {
  const {
    query: { trait },
  } = req;
  try {
    return res.status(200).json(getVariants(trait as string));
  } catch (err) {
    return res
      .status(404)
      .json({ code: 404, message: `Trait ${trait} does not exist` });
  }
};

const handler = (
  req: NextApiRequest,
  res: NextApiResponse<Variant | ApiError>
) => {
  const { method } = req;

  switch (method) {
    case "GET":
      return handleGet(req, res);
    default:
      return notAllowedMethod(req, res, ["GET"]);
  }
};

export default handler;
