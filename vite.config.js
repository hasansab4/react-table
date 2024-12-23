import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  build: {
    outDir: 'build', // Change the output folder to 'build'
  },
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom', // Simulates a browser-like environment
    setupFiles: './src/setupTests.js', // Optional, for global test setup
  },
})
