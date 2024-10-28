/** @type {import('tailwindcss').Config} */
import "tailwindcss/colors";
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  darkMode: "selector",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["InterVariable", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        light: "#f1f5f9",
        dark: "#020617",
      },
    },
  },
  plugins: [require("tailwindcss-react-aria-components")],
};
