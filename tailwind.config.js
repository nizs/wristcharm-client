/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#FD9B63',
        'primary-light': '#424242',
        'secondary': '#6990cb',
        'secondary-light': '#A4C1ED'
      }
    },
  },
  plugins: [
    require('daisyui')
  ],
}

