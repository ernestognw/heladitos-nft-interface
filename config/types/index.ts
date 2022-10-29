// Keeyp in sync with tailwind.config.js
export const colors = [
  "mint",
  "grape",
  "purple",
  "strawberry",
  "orange-red",
  "orange",
  "mango",
  "sky-blue",
  "tw-blue",
  "blueberry",
  "white",
] as const;
export type Color = typeof colors[number];

export const sizes = ["xs", "sm", "md", "lg", "xl"] as const;
export type Size = typeof sizes[number];

export type Variant = string;
export type Variants = Variant[];
export type TraitName = string;
export type Traits = {
  [key: TraitName]: Variants;
};

export type SelectedTraits = { [key: string]: string };
