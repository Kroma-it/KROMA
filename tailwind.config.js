/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        kroma: "#19101f",
      },
      keyframes: {
        morph: {
          '0%, 100%': { borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" },
          '50%': { borderRadius: "30% 60% 70% 40% / 50% 60% 30% 60%" }
        }
      },
      animation: {
        morph: 'morph 5s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}