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
      bgPrimaryLight: '#424855',
      dividerGray: '#46545e',
      green: '#00c400',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
    },
    extend: {
      width: {
        '600px': '600px',
        '50px': '50px',
        '130px': '130px'
      },
      height: {        
        '50px': '50px',
        '130px': '130px'
      }
    },    

  },
  variants: {
    extend: {},
  },
  plugins: [],
}
