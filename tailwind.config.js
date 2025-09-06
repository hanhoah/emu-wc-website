/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          main: "#3889be",
          light: "#59a6d8",
          dark: "#256e9e",
        },
        secondary: {
          main: "#e67e55",
          light: "#ff9d75",
          dark: "#c65b39",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        serif: ["var(--font-playfair)"],
      },
    },
  },
  plugins: [],
}
