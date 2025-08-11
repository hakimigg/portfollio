import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './',  // Changed to relative path for GitHub Pages
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: true
  },
  server: {
    port: 3000,
    open: true
  }
});