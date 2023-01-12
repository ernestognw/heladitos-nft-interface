import { NextApiRequest, NextApiResponse } from "next";
export * from "./traits";

type HTTPMethod = "GET" | "POST";

const notAllowedMethod = <T>(
  req: NextApiRequest,
  res: NextApiResponse<T>,
  allowedMethods: HTTPMethod[]
) => {
  const { method } = req;
  res.setHeader("Allow", allowedMethods);
  return res.status(405).end(`Method ${method} not allowed`);
};

type Method<T> = (req: NextApiRequest, res: NextApiResponse<T>) => void;
export type Methods<T> = Partial<Record<HTTPMethod, Method<T>>>;

export const handleRequest = <T>(
  req: NextApiRequest,
  res: NextApiResponse<T>,
  methods: Methods<T>
) => {
  const { method } = req;
  const methodFunction = methods[method as HTTPMethod];
  if (methodFunction) return methodFunction(req, res);
  return notAllowedMethod(req, res, Object.keys(methods) as HTTPMethod[]);
};
