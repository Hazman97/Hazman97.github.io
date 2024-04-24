import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0',
  },
  plugins: [
    vue(),
  ],
  css: {
    postcss: './postcss.config.cjs' // Update the path if necessary
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      
        'vue': 'vue/dist/vue.esm-bundler.js'
      
    }
  }
})

