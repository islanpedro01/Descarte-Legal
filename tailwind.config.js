/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./js/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    colors: {
      'musgo': '#75A488'
    },

    extend: {
      width:{
        '200':'1311.33px',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
  darkMode: 'class'
}

