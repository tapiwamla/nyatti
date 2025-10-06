import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        software: resolve(__dirname, 'software.html'),
        ecommerce: resolve(__dirname, 'ecommerce.html'),
        websites: resolve(__dirname, 'websites.html'),
        seo: resolve(__dirname, 'seo.html'),
        optimize: resolve(__dirname, 'optimize.html'),
      },
    },
  },
})
