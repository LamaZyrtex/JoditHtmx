// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'main',
      // the proper extensions will be added
      fileName: 'main',
    },
    rollupOptions: {
    },
    outDir: '../server/wwwroot/js'
  },
})