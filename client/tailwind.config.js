const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["InterVariable", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "tt-primary": "#84bd01",
        "tt-secondary": "#295309",
        "tt-berry": "#8f0773",
      },
    },
  },
  plugins: [],
};
