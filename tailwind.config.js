module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        tomato: {
          '50':  '#fcf8f6',
          '100': '#fceeef',
          '200': '#fbd2dd',
          '300': '#faadbe',
          '400': '#fa778c',
          '500': '#ff5b60',
          '600': '#f52e40',
          '700': '#da2338',
          '800': '#b01d31',
          '900': '#8d1929',
        },
        turquoise: {
          '50':  '#ecf8f8',
          '100': '#d2f7f4',
          '200': '#a2f1e7',
          '300': '#6aded3',
          '400': '#21d4c2',
          '500': '#0abba6',
          '600': '#099f89',
          '700': '#0f816f',
          '800': '#126458',
          '900': '#115147',
        },
        orange: {
          '50':  '#f9f6e8',
          '100': '#faf2c3',
          '200': '#f5e981',
          '300': '#ffdc35',
          '400': '#e4bc12',
          '500': '#d99c06',
          '600': '#c37804',
          '700': '#9f5b07',
          '800': '#7f460d',
          '900': '#66390f',
        },
        'primary': '#ff5b60',
        'secondary': '#6aded3',
        'tertiary': '#ffdc35',
      }
    },
    fontFamily: {
      'script': ['Yellowtail', 'cursive']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}