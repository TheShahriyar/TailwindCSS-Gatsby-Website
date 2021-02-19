module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      zIndex: {
        '1': '1',
        '-1': '-1',
      },
      height: {
        banner: '1000px'
      }
    },
  },
  variants: {
    extend: {
      display: ["group-hover"],
      transitionProperty: ['hover', 'focus'],
    },
  },
  plugins: [],
}
