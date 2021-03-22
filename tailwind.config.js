module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      black: '#242424',
      orange: '#EAA300',
    },
    fontFamily: {
      sans: ['Karla'],
      serif: ['Butler'],
    },
    colors: {
      orange: {
        DEFAULT: '#EAA300',
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
