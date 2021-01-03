const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      bgPrimary: '#282c34',
      primary: '#ffffff',
      secondary: '#4398f6',
      textgray: '#8899A6',
      bgPrimaryLight: '#393f4a',
      bgPrimaryLighter: '#4a5260',
      dividerGray: '#46545e',
      green: '#00c400',
      secondaryLight: '#7bb7f9',
      orange: '#f46611',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
    },
    extend: {
      width: {
        '30px': '30px',
        '50px': '50px',
        '96px': '96px',
        '130px': '130px',
        '500px': '500px',
        '598px': '598px',
        '600px': '600px',              
      },
      height: {        
        '30px': '30px',
        '50px': '50px',
        '130px': '130px',
        '265px': '265px'
      }
    },    

  },
  variants: {
    extend: {},
  },
  plugins: [],
}
