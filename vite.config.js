import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      allow: [
        '..',
        '/Users/macintoshhd/.gemini/antigravity/brain/b63f5f1d-e76b-4392-8ade-9478dc714b5d'
      ]
    }
  }
})
