import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',
  server: {
    proxy: {
      '/storybook': {
        target: 'http://localhost:6006',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/storybook/, ''),
      },
    },
  },
})
