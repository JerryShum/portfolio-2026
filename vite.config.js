import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
   plugins: [react(), tailwindcss()],
   test: {
      environment: 'jsdom',
      setupFiles: ['./src/test/setup.js'],
      // Tests import describe/it/expect from 'vitest' explicitly, so no test
      // globals are needed (and eslint needs no test-file override).
      globals: false,
   },
});
