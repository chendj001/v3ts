import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

import VitePluginVitepress from './src/plugins/vite-plugin-vitepress'
import VitePluginClean from './src/plugins/vite-plugin-clean'
import { LibResolver, ComResolver } from './src/resolver'

import path from 'path'
// svg
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import vueSetupExtend from 'vite-plugin-vue-setup-extend'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VitePluginVitepress({
      markdown: {
        lineNumbers: true
      }
    }),
    vue({
      include: [/\.[tj]sx$/, /\.vue$/, /\.md$/]
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
      imports: [
        'vue',
        'vue-router',
        {
          'naive-ui': ['*']
        }
      ],
      resolvers: [LibResolver()]
    }),
    Components({
      dts: true,
      globs: ['src/components/**/index.vue'],
      resolvers: [NaiveUiResolver()]
    }),
    VitePluginClean({
      targetFiles: /dev-dist|dist/
    }),
    vueSetupExtend(),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), 'src/icons')],
      // icons的子目录才有dir
      symbolId: 'icon-[dir]-[name]'
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
