const { lighten, darken } = require("polished");

const colors = {
  purple: "#750787",
  mint: "#55EAAB",
  grape: "#9F50FF",
  strawberry: "#FF7DEA",
  "orange-red": "#F86848",
};

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./views/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: Object.entries(colors).reduce((colors, [name, color]) => {
        colors[name] = {
          900: darken(0.28, color),
          800: darken(0.21, color),
          700: darken(0.14, color),
          600: darken(0.07, color),
          500: color,
          400: lighten(0.07, color),
          300: lighten(0.14, color),
          200: lighten(0.21, color),
          100: lighten(0.28, color),
        };
        return colors;
      }, {}),
    },
    fontFamily: {
      sans: ["Outfit", "sans-serif"],
    },
  },
  plugins: [],
};
