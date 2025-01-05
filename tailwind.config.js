/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        EBGaramond:"'EB Garamond', serif",
        Jersey15Charted:"'Jersey 15 Charted', sans-serif"
      }
    },
  },
  plugins: [],
}

