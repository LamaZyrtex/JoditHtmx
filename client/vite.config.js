// vite.config.js
import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'name..',
      formats: ['iife'],
      fileName: (format) => `main.${format}.js`
    },
    minify: 'terser',
    terserOptions: {
      keep_fnames: true,
      format: {
        comments: false
      },
    },
    outDir: '../server/wwwroot/js',
    emptyOutDir: true
  }
})
