/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        lightgray: "#bfd6c4",
        gray: {
          "100": "#191b21",
          "200": "#161616",
          "300": "#060606",
        },
        antiquewhite: "#e6d4c4",
        ghostwhite: "#f7f5f9",
        gainsboro: "#d9d9d9",
        darkslategray: "#383838",
      },
      spacing: {},
      fontFamily: {
        abel: "Abel",
        inherit: "inherit",
        "alike-angular": "'Alike Angular'",
        "archivo-narrow": "'Archivo Narrow'",
      },
      borderRadius: {
        "45xl": "64px",
        "33xl": "52px",
      },
    },
    fontSize: {
      "5xl": "24px",
      "29xl": "48px",
      "45xl": "64px",
      "13xl": "32px",
      xl: "20px",
      "17xl": "36px",
      "77xl": "96px",
      "21xl": "40px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
