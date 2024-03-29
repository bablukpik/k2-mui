import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: { outDir: './build' },
  base: './',
  server: {
    port: 4000,
    open: true,
    host: 'localhost',
  }
})
