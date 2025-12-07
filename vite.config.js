// vite.config.js - PASTIKAN SEPERTI INI
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'  // IMPORT INI

export default defineConfig({
  base: '/portfolio',
  plugins: [
    react(),
    tailwindcss(),  // TAMBAHKAN INI
  ],
  server: {
    port: 5173,
    host: true
  }
})