/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#6990cb',
        'primarylight': '#87ADE5'
      }
    },
  },
  plugins: [
    require('daisyui')
  ],
}

