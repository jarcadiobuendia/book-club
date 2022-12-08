import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
process.env.BROWSER = 'chrome';

// https://vitejs.dev/config/
export default defineConfig({
  base: '',
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        app: './main.html',
      },
    },
  },
  server: {
    open: '/main.html',
  },
});
