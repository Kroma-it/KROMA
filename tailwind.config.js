/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        kroma: {
          100 : "#f2eaf7",
          200 : "#c59dd9",
          300 : "#7a3f91",
          400 : "#2b0d3e",
          500 : "#16091f",
        }
      },
      keyframes: {
        morph: {
          '0%, 100%': { borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" },
          '50%': { borderRadius: "30% 60% 70% 40% / 50% 60% 30% 60%" }
        },
        zoomIn : {
          '0%': { transform: "scale(0.9)", opacity: "0" },
          '100%': { transform: "scale(1)", opacity: "1" }
        }
      },
      animation: {
        morph: 'morph 5s ease-in-out infinite',
        zoomIn: 'zoomIn 1s ease-in-out',
      }
    },
  },
  plugins: [],
}