import type { NextApiRequest, NextApiResponse } from "next";
import { Variants } from "@config/types";
import { getVariants, notAllowedMethod } from "@config/api/utils";
import { ApiError } from "@config/api/types";

const handleGet = (
  req: NextApiRequest,
  res: NextApiResponse<Variants | ApiError>
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
  res: NextApiResponse<Variants | ApiError>
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
