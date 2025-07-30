import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // When deploying to GitHub Pages the project will live at /bccl/,
  // so set the base path accordingly. This ensures that asset URLs
  // resolve correctly when served from the subdirectory.
  base: '/bccl/',
  plugins: [react()],
})
