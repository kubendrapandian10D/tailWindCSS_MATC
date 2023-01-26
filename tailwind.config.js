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
        'mildGreen':'#37CB79',
        'mildOrange':'#FF9F43',
        'mildRed':'#EA5455',
        'grayMedium_': '#979797',
        'grayLight@': 'Gray-Light',
        'whiteSmoke_': '#F5F5F5'
      },
      dropShadow: {
        '4ds@': ' 0px 0px 4px rgba(165, 163, 174, 0.3)'
      },
      fontSize: {
        '9_': '9px',
        '10_':'10px',
        '13_':'13px'
      },
      fontFamily: {
        // 'roboto_': ['Roboto'],
        'mulish':['Mulish']
      },
      height: {
        '26@': '26px',
        '35_':'35px',
        '37_':'37px',
        '58_':'58px',
        '60': '60px',
        '68_':'68px',
        '134_': '134px',
        '373_':'373px'
      },
      rotate: {
        '270': '270deg',
      },
      spacing: {
        '7_': '7px',
        '22_':'22px',
        '26_':'26px',
        '30_': '30px',
        '102': '102px'
      },
      width: {
        '18_':'18px',
        '26_': '26px',
        '36_': '36px',
        '88': '88px',
        '157_': '157px',
        '213_': '213px',
        '330_':'330px',
        '363_': '363px',
        '742@': '742px',
        '751_': '751px',
        '1138': '1138px',
        '1186': '1186px',
      },





    },
  },
  plugins: [],
};
