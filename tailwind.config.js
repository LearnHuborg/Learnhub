/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'transparent-white': 'rgba(255, 255, 255, 0)',
        'black-opacity-30': 'rgba(0, 0, 0, 0.30)',
        'blue-text-color': '#353FB0',
        'module-heading-color': 'linear-gradient(0deg, #B7B9FF -94.44%, #000352 204.63%)',
        'blue-text-secondary':'#545CAD'
      }
    },
  },
  plugins: [],
}

