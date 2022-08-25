import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
module.exports = defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      '/api': {
        /** 服务器地址 */
        target: 'http://localhost:5000',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      }
    }
  }
})
