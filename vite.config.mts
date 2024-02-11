import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

import AutoImport from 'unplugin-auto-import/vite'

import VitePluginVitepress from './src/plugins/vite-plugin-vitepress'
import myLib from './src/resolver'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VitePluginVitepress({
      markdown: {
        lineNumbers: true
      }
    }),
    vue({
      include: [/\.vue$/, /\.md$/]
    }),
    vueJsx(),
    AutoImport({
      // targets to transform
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/ // .md
      ],
      // global imports to register
      imports: ['vue', 'vue-router'],
      resolvers: [myLib()]
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
