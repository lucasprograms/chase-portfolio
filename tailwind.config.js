module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Karla'],
      serif: ['DM Serif Display'],
    },
    colors: {
      black: {
        DEFAULT: '#242424',
      },
      orange: {
        DEFAULT: '#EAA300',
      },
      white: {
        DEFAULT: '#FFFFFF',
      },
    },
  },
  variants: {
    extend: {
      translate: ['group-hover'],
    },
  },
  plugins: [],
}
