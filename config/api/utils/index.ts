import { NextApiRequest, NextApiResponse } from "next";
export * from "./svg";

type HTTPMethod = "GET" | "POST";

export const notAllowedMethod = <T>(
  req: NextApiRequest,
  res: NextApiResponse<T>,
  allowedMethods: HTTPMethod[]
) => {
  const { method } = req;
  res.setHeader("Allow", allowedMethods);
  return res.status(405).end(`Method ${method} not allowed`);
};
