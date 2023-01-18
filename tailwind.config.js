/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/app.js"],
  theme: {
    extend: {
      colors: {
        blackRock: "#363740",
        midBlack: "#43444d",
        mildSandal: "#DBDADE"
      },
      spacing: {
        '102': '102px'
      },
      rotate: {
        '270': '270deg',
      }

    },
  },
  plugins: [],
};
