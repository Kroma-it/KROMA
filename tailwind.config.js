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
        },
        float1: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(40px, -40px) scale(1.1)' }
        },
        float2: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(-40px, 40px) scale(0.9)' }
        },
        float3: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(40px, 40px) scale(1.05)' }
        }
      },
      animation: {
        morph: 'morph 8s ease-in-out infinite',
        float1: 'float1 15s ease-in-out infinite alternate',
        float2: 'float2 18s ease-in-out infinite alternate',
        float3: 'float3 20s ease-in-out infinite alternate'
      }
    },
  },
  plugins: [],
}