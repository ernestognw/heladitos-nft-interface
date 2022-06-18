import getConfig from "next/config";
import { join } from "path";

const { serverRuntimeConfig } = getConfig();

const traitsDirectory = join(
  serverRuntimeConfig.PROJECT_ROOT,
  "./public",
  "traits"
);

export { traitsDirectory };
