import type { NextApiRequest, NextApiResponse } from "next";
import { Traits } from "@config/types";
import { getTraits, handleRequest, Methods } from "@config/api/utils";
import { ApiError } from "@config/api/types";

type Response = Traits | ApiError;

const handleGet = (_: NextApiRequest, res: NextApiResponse<Response>) =>
  res.status(200).json(getTraits());

const methods: Methods<Response> = {
  GET: handleGet,
};

const handler = (req: NextApiRequest, res: NextApiResponse<Response>) =>
  handleRequest(req, res, methods);

export default handler;
