import type { NextApiRequest, NextApiResponse } from "next";
import { Variants } from "@config/types";
import { getVariants, handleRequest, Methods } from "@config/api/utils";
import { ApiError } from "@config/api/types";

type Response = Variants | ApiError;

const handleGet = (req: NextApiRequest, res: NextApiResponse<Response>) => {
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

const methods: Methods<Response> = {
  GET: handleGet,
};

const handler = (req: NextApiRequest, res: NextApiResponse<Response>) =>
  handleRequest(req, res, methods);

export default handler;
