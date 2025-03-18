/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        light: "#6699ff",
        medium: "#ffcc66",
        heavy: "#ff6666",
        white: "aliceblue",
        lightGrey: "#282828",
        driveRush: "#2ad35d",
        punishCounter: "#fa6d0d",
        driveImpact: "#a121b1",
      },
    },
  },
  plugins: [],
}
