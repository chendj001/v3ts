import { defineStore } from "pinia";
import type { RouteRecordRaw } from "vue-router";

const useCachedRoutesStore = defineStore('cached-routes', {
  state: () => {
    return {
      cachedRoutes: [] as RouteRecordRaw[]
    }
  },
  actions: {
    init(routes: RouteRecordRaw[]) {
      this.cachedRoutes = routes
    },
    update(routes: RouteRecordRaw[]) {
      this.cachedRoutes = routes
    },
    reset() {
      this.$reset()
    },
  }
})

export default useCachedRoutesStore