module.exports = {
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      mont: ["Montserrat", "sans-serif"],
      rale: ["Raleway", "sans-serif"],
    },
    colors: {
      white: {
        DEFAULT: "#ffffff",
      },
      black: {
        DEFAULT: "#000000",
      },
      gray: {
        cBDBDBD: "#BDBDBD",
        cA9A9A9: "#A9A9A9",
        c828282: "#828282",
        c4F4F4F: "#4F4F4F",
        c333333: "#333333",
      },
      red: { cEB5757: "#EB5757" },
      blue: { c2F80ED: "#2F80ED" },
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
