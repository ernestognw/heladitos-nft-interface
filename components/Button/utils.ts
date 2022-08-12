import { Color, Size } from "@config/types";

// Run when new color is added and the paste the result in the colors config
// Needed since tailwind doesn't allow dynamic class generation (wtf!)
//
// console.log(
//   colors.reduce((colors, color) => {
//     colors[color] = [
//       `bg-${color}-500`,
//       `hover:bg-${color}-600`,
//       `focus:bg-${color}-600`,
//       `active:bg-${color}-700`,
//     ].join(" ");
//     return colors;
//   }, {} as { [key in Color]: string })
// );

type Config = {
  base: string;
  colors: { [key in Color]: string };
  sizes: { [key in Size]: string };
};

const config: Config = {
  base: "text-black font-bold rounded-[99999px] shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out border-black",
  colors: {
    mint: "bg-mint-500 hover:bg-mint-600 focus:bg-mint-600 active:bg-mint-700",
    grape:
      "bg-grape-500 hover:bg-grape-600 focus:bg-grape-600 active:bg-grape-700",
    purple:
      "bg-purple-500 hover:bg-purple-600 focus:bg-purple-600 active:bg-purple-700",
    strawberry:
      "bg-strawberry-500 hover:bg-strawberry-600 focus:bg-strawberry-600 active:bg-strawberry-700",
    "orange-red":
      "bg-orange-red-500 hover:bg-orange-red-600 focus:bg-orange-red-600 active:bg-orange-red-700",
    orange:
      "bg-orange-500 hover:bg-orange-600 focus:bg-orange-600 active:bg-orange-700",
    mango:
      "bg-mango-500 hover:bg-mango-600 focus:bg-mango-600 active:bg-mango-700",
    "sky-blue":
      "bg-sky-blue-500 hover:bg-sky-blue-600 focus:bg-sky-blue-600 active:bg-sky-blue-700",
    "tw-blue":
      "bg-tw-blue-500 hover:bg-tw-blue-600 focus:bg-tw-blue-600 active:bg-tw-blue-700",
    blueberry:
      "bg-blueberry-500 hover:bg-blueberry-600 focus:bg-blueberry-600 active:bg-blueberry-700",
    white: "bg-gray-100 hover:bg-gray-200 focus:bg-gray-200 active:bg-gray-300",
  },
  sizes: {
    xs: "text-xs px-4 py-1 border-2",
    sm: "text-sm px-5 py-1.5 border-4",
    md: "text-md px-6 py-2 border-4",
    lg: "text-md px-7 py-2.5 border-4",
    xl: "text-lg px-8 py-3 border-4",
  },
};

export { config };
