import type { NextApiRequest, NextApiResponse } from "next";
import { Traits } from "@config/types";
import { getTraits, notAllowedMethod } from "@config/api/utils";

const handler = (req: NextApiRequest, res: NextApiResponse<Traits>) => {
  const { method } = req;

  switch (method) {
    case "GET":
      return res.status(200).json(getTraits());
    default:
      return notAllowedMethod(req, res, ["GET"]);
  }
};

export default handler;
