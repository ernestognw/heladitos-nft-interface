// Keeyp in sync with tailwind.config.js
export const colors = [
  "mint",
  "grape",
  "purple",
  "strawberry",
  "orange-red",
  "mango",
  "sky-blue",
  "blueberry",
  "white",
] as const;
export type Color = typeof colors[number];

export const sizes = ["xs", "sm", "md", "lg", "xl"];
export type Size = typeof sizes[number];
