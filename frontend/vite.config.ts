import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import Sitemap from "vite-plugin-sitemap"

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    Sitemap({
      hostname: "https://kroma-agence.vercel.app",
      dynamicRoutes : [
        '/clients',
        '/tarification',
        '/personnalisation',
      ]
    })
  ],
  base: '/',
  server: {
    host: '0.0.0.0',
    port: process.env.PORT ? parseInt(process.env.PORT) : 5173,
  },
  preview: {
    host: '0.0.0.0',
    port: process.env.PORT ? parseInt(process.env.PORT) : 4173,
    allowedHosts: true // Important pour les nouvelles versions de Vite
  }
})
