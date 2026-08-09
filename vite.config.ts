import { reactRouter } from '@react-router/dev/vite';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [
    reactRouter(),
    svgr({
      svgrOptions: { plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx'] },
    }),
  ],

  resolve: {
    tsconfigPaths: true,
  },

  build: {
    license: { fileName: 'license.md' },
  },
});
