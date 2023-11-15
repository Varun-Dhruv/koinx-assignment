/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/containers/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      white: "#ffffff",
      gray: {
        100: "#f5f5f5",
        200: "#EFF2F5",
        300: "#3E424A",
        800: "#0F1629",
      },
      green: {
        100: "#EBF9F4",
        700: "#0FBA83",
      },
      black: "#000000",
      blue: {
        50: "#EBF2FF",
        100: "#0052FE",
        200: "rgba(0, 82, 254, 0.06)",
        300: "#0141CF",
      },
      extend: {
        fontSize: {
          semibase: "0.938rem",
        },
        fontFamily: {
          sans: ["Inter", "sans-serif"],
        },
      },
    },
  },
  plugins: [],
};
