// vite.config.js - PASTIKAN SEPERTI INI
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'  // IMPORT INI

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),  // TAMBAHKAN INI
  ],
  server: {
    prot: 5173,
    host: true
  }
})