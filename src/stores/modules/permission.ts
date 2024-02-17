import router from "@/router";
import { defineStore } from "pinia";

const usePermissionStore = defineStore('permission', {
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
      // 这个路由一定要放在最后
      router.addRoute({
        path: '/:pathMatch(.*)*',
        redirect: '/404',
        meta: {
          hidden: true,
        },
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