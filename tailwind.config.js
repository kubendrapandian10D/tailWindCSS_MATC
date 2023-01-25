/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/app.js"],
  theme: {
    extend: {
      colors: {
        'blackRock': "#363740",
        'lavendarLace_': '#DCD9DE',
        'midBlack': "#43444d",
        'mildSandal': "#DBDADE",
        'purpleTaupe_': '#4B465C',
        'grayMedium_': '#979797',
        'grayLight@': 'Gray-Light',
        'whiteSmoke_': '#F5F5F5'
      },
      dropShadow: {
        '4ds@': ' 0px 0px 4px rgba(165, 163, 174, 0.3)'
      },
      fontFamily: {
        'roboto_': ['Roboto']
      },
      height: {
        '26@': '26px',
        '60': '60px'
      },
      rotate: {
        '270': '270deg',
      },
      spacing: {
        '7_': '7px',
        '102': '102px'
      },
      width: {
        '26_': '26px',
        '36_': '36px',
        '88': '88px',
        '213_': '213px',
        '742@': '742px',
        '1138': '1138px',
        '1186': '1186px',
      },





    },
  },
  plugins: [],
};
