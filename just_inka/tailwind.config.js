/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        courgette: ['Courgette', 'cursive'],
      },
      colors: {
        'gray': '#8492a6',
        'gray-light': '#d3dce6',
        'black-light': 'rgb(35 37 39)',
      },
    },
  },
  plugins: [],
}

