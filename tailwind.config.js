/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8FC63F',      // The green accent color from your header
        secondary: '#111517',    // The dark menu background
        neutral: '#6F7073',      // The body background color
        accent: '#ef0d33',       // The hover/accent red color
      }
    }
  },
  plugins: []
}