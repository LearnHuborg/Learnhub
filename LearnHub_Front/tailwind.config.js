/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
  extend: {
    colors: {
      'transparent-white': 'rgba(255, 255, 255, 0)',
      'black-opacity-30': 'rgba(0, 0, 0, 0.30)',
      'blue-text-color': '#353FB0',
      'module-heading-color': 'linear-gradient(0deg, #B7B9FF -94.44%, #000352 204.63%)',
      'blue-text-secondary':'#545CAD'
    },
    animation: {
      "gradient-x": "gradient-x 5s ease infinite",
      glow: "glow 2s ease-in-out infinite alternate",
    },
    keyframes: {
      "gradient-x": {
        "0%, 100%": { backgroundPosition: "0% 50%" },
        "50%": { backgroundPosition: "100% 50%" },
      },
      glow: {
        "0%": {
          boxShadow:
            "0 0 10px rgba(255, 105, 180, 0.5), 0 0 20px rgba(255, 105, 180, 0.4), 0 0 30px rgba(255, 105, 180, 0.3)",
        },
        "100%": {
          boxShadow:
            "0 0 20px rgba(255, 105, 180, 0.8), 0 0 30px rgba(255, 105, 180, 0.7), 0 0 40px rgba(255, 105, 180, 0.6)",
        },
      },
    },
  },
};
export const plugins = [];
