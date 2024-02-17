import { defineStore } from "pinia";

const useCachedRoutesStore = defineStore('cached-routes', {
  state: () => {
    return {
      cachedRoutes: [] as string[]
    }
  },
  actions: {
    initCachedRoutes(routes: string[]) {
      this.cachedRoutes = routes
    },
    setCachedRoutes(routes: string[]) {
      this.cachedRoutes = routes
    },
    resetCachedRoutes() {
      this.$reset()
    },
  }
})

export default useCachedRoutesStore