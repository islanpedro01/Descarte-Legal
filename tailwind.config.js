/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./js/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width:{
        '200':'1311.33px',
      }
    },
  },
  plugins: [],
  darkMode: 'class',
  base:'/Descarte-Legal/',
}

