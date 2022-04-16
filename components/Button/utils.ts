import type { Color, Size } from "@config/types";

const classes = {
  base: [
    "text-black",
    "font-bold",
    "rounded-[99999px]",
    "shadow-md",
    "hover:shadow-lg",
    "focus:shadow-lg",
    "focus:outline-none",
    "focus:ring-0",
    "active:shadow-lg",
    "transition",
    "duration-150",
    "ease-in-out",
    "border-2",
    "border-black",
  ],
  color: (color: Color) => [
    `bg-${color}-500`,
    `hover:bg-${color}-600`,
    `focus:bg-${color}-600`,
    `active:bg-${color}-700`,
  ],
  size: (size: Size): string[] => {
    const sizes: { [key in Size]: string[] } = {
      sm: ["text-sm", "px-3", "py-1.5"],
      md: ["text-md", "px-4", "py-2"],
      lg: ["text-md", "px-5", "py-2.5"],
      xl: ["text-lg", "px-6", "py-3"],
    };

    return [...sizes[size]];
  },
};

export { classes };
