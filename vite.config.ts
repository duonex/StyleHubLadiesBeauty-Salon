
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  base: '/',

  build: {
    cssCodeSplit: true,
    chunkSizeWarningLimit: 800,
    reportCompressedSize: true,
    rollupOptions: {
      output: {
        manualChunks(id: string) {
          if (
            id.includes('node_modules/react') ||
            id.includes('node_modules/react-dom') ||
            id.includes('node_modules/react-router-dom')
          ) {
            return 'react-vendor';
          }

          if (id.includes('node_modules/lucide-react')) {
            return 'icons-vendor';
          }

          if (
            id.includes('node_modules/gsap') ||
            id.includes('node_modules/lenis')
          ) {
            return 'anim-vendor';
          }

          if (id.includes('three') || id.includes('@react-three')) {
            return 'three-vendor';
          }
        },
      },
    },
  },
});
