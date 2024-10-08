/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Poppins"', "sans-serif"], // Set Poppins as the default sans font
        cursive: ['"Dancing Script"', "cursive"],
      },
    },
  },
  plugins: [],
});
