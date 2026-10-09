import { defineConfig } from 'vitest/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
   plugins: [tailwindcss()],
   test: {
      environment: 'jsdom',
      setupFiles: ['./src/test/setup.js'],
      // Tests import describe/it/expect from 'vitest' explicitly, so no test
      // globals are needed (and eslint needs no test-file override).
      globals: false,
   },
});
