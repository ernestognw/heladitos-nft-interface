import { resolve } from "path";

const traitsDirectory = resolve("./public", "traits");

const order = [
  "flags-and-accesories",
  "eyewear",
  "head-accessories",
  "eyes",
  "mouth",
  "topping",
  "flavour",
  "cone",
  "background",
].reduce((acc: { [key: string]: number }, curr, index) => {
  acc[curr] = index;
  return acc;
}, {});

export { traitsDirectory, order };
