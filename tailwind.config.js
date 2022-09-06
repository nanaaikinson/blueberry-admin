/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */

const { colors } = require("./theme/colors");
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: colors,
    },
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase(require("./theme/typography"));
    }),
    require("tailwind-bootstrap-grid")({
      containerMaxWidths: {
        sm: "540px",
        md: "720px",
        lg: "960px",
        xl: "1140px",
      },
    }),
    require("kutty"),
  ],
  corePlugins: { container: false },
};
