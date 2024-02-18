import { createRouter, createWebHistory } from 'vue-router'
import { constantRoutes } from './routes/constants'
import { getMd } from '@/md'
console.log(getMd())
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: constantRoutes
})

export default router
