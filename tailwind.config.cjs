/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
    "./Router.tsx",
  ],
  theme: {
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      "2xl": 32,
    },
    colors: {
      transparent: "transparent",

      black: "#000",
      white: "#FFF",

      gray: {
        900: "#121214",
        800: "#202024",
        400: "#7c7c8a",
        200: "#c4c4cc",
        100: "#e1e1e6",
      },

      red: {
        500: "#F20024",
        300: "#FFFFFF",
      },
    },
    extend: {
      fontFamily: {
        sans: "Inter, sans-serif",
      },
      animation: {
        "spin-slow": "spin 11s linear infinite",
      },
    },
  },
  plugins: [],
};
