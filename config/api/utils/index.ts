import { PathLike, readdirSync, statSync } from "fs";
import { extname, join } from "path";

const removeSvg = (fileName: string) => fileName.replace(".svg", "");
const appendSvg = (fileName: string) => `${fileName}.svg`;
const readSvgs = (
  path: string,
  options?:
    | {
        encoding: BufferEncoding | null;
        withFileTypes?: false | undefined;
      }
    | BufferEncoding
    | null
) =>
  readdirSync(path, options).filter((file) => {
    const ext = extname(file);
    if (!ext) return statSync(join(path, file)).isDirectory();
    return ext.toLowerCase() === ".svg";
  });

export { removeSvg, appendSvg, readSvgs };
