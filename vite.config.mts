import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

import VitePluginVitepress from './src/plugins/vite-plugin-vitepress'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VitePluginVitepress({
      markdown: {
        lineNumbers: true
      },
    }),
    vue({
      include: [/\.vue$/, /\.md$/]
    }),
    vueJsx()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
