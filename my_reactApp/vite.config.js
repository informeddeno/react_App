import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Ensure the base path is correct
  build: {
    outDir: 'build', // Ensure the output directory matches where you serve files
  },
})
