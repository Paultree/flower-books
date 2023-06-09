import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/flower-books',
  plugins: [react()],
  test: {
    globals: true, // so we don't need to import describe and it every time
    environment: 'jsdom',
    setupFiles: './config/setup-tests.ts' // path to the config file
  }
});
