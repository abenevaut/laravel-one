import path from 'path';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import laravel from 'laravel-vite-plugin';

const isDevEnvironment = 'dev' === process.env.NODE_ENV || true;

export default defineConfig({
  base: '/',
  build: {
    manifest: true,
    sourcemap: true,
    minify: false,
    css: {
      minify: false,
    },
    outDir: path.join(__dirname, 'dist'),
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`,
      },
    },
  },
  plugins: [
    react(),
    laravel({
      input: [
        'theme/css/app.css',
        'theme/js/Home.jsx',
        'theme/js/Article.jsx',
        'theme/js/Writeup.jsx',
        'theme/js/Privacy.jsx',
        'theme/js/Profile.jsx',
        'theme/js/Terms.jsx',
      ],
      refresh: true,
    }),
  ],
})
