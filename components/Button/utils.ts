import { Color, colors, Size, sizes } from "@config/types";

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
  base: "text-black font-bold rounded-[99999px] shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out border-2 border-black",
  colors: {
    mint: "bg-mint-500 hover:bg-mint-600 focus:bg-mint-600 active:bg-mint-700",
    grape:
      "bg-grape-500 hover:bg-grape-600 focus:bg-grape-600 active:bg-grape-700",
    purple:
      "bg-purple-500 hover:bg-purple-600 focus:bg-purple-600 active:bg-purple-700",
    strawberry:
      "bg-strawberry-500 hover:bg-strawberry-600 focus:bg-strawberry-600 active:bg-strawberry-700",
  },
  sizes: {
    sm: "text-sm px-3 py-1.5",
    md: "text-md px-4 py-2",
    lg: "text-md px-5 py-2.5",
    xl: "text-lg px-6 py-3",
  },
};

export { config };
