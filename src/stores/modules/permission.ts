import router from "@/router";
import { defineStore } from "pinia";
import asyncRoute from '@/router/routes/async'
import { findRootPathRoute, generatorRoutes, resolvePath } from "../help";
import type { RouteRecordRaw } from "vue-router";
import { constantRoutes } from "@/router/routes/constants";
export const usePermissionStore = defineStore('permission', {
  state: () => {
    return {
      permissionRoutes: [] as any[]
    }
  },
  getters: {
    getPermissionSideBar(state) {
      return state.permissionRoutes.filter(route => {
        return route.meta && !route.meta.hidden
      })
    },
    getPermissionSplitTabs(state) {
      return state.permissionRoutes.filter(route => {
        return route.meta && !route.meta.hidden && route.children && route.children.length > 0
      })
    }
  },
  actions: {
    async init() {
      const assessRoutes = await this.getRoute();
      console.log('1111111111', assessRoutes)
      assessRoutes.forEach(route => {
        router.addRoute(route)
      })
      const root = findRootPathRoute(assessRoutes)
      // 设置默认首页
      router.addRoute({
        path: '/',
        redirect: root ?? '/',
        meta: {
          hidden: true,
        },
      })
      // 这个路由一定要放在最后
      router.addRoute({
        path: '/:pathMatch(.*)*',
        redirect: '/404',
        meta: {
          hidden: true,
        },
      })
      this.permissionRoutes = [...constantRoutes, ...assessRoutes]
    },
    getRoute() {
      return new Promise<RouteRecordRaw[]>((resolve) => {
        resolve(generatorRoutes(asyncRoute))
      })
    },
    isEmpty() {
      return !this.permissionRoutes || this.permissionRoutes.length === 0
    },
    reload() {
      this.init()
    },
    reset() {
      this.$reset()
    }
  }
})
export default usePermissionStore