/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  mode: "jit",
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}", './node_modules/tw-elements/dist/js/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      ph: "360px",
      // => @media (min-width: 360px) { ... }
      tp: "440px",
      // => @media (min-width: 360px) { ... }
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        teal: colors.teal,
        cyan: colors.cyan,
        hussam:'#360369'
      },

    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
};
