import './assets/main.css'

import { createApp } from 'vue'
import pinia from './stores'

import App from './App.vue'
import router from './router'
import '@/plugins/vite-plugin-vitepress/theme'
import useRouteGuard from './router/guard'
const app = createApp(App)
app.use(pinia)
app.use(router)
useRouteGuard()
app.mount('#app')

