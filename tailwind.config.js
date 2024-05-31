/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'peach':'#ba9b88',
        'light-gray':'#edeef2',
        'heavy-black': '#141311'
      }
    },
  },
  plugins: [],
}