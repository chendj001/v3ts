import type { RouteRecordRaw } from 'vue-router'
import router from '..'
import { findAffixedRoutes } from '@/stores/help'
import useVisitedRouteStore from '@/stores/modules/visited-routes'
function useVisitedGuard() {
  router.beforeEach((to) => {
    if (['404', '500', '403', 'not-found', 'Login'].includes(to.name as string)) {
      return true
    }
    const visitedRouteStore = useVisitedRouteStore()
    if (!visitedRouteStore.isLoadAffix) {
      const affixRoutes = findAffixedRoutes(router.getRoutes())
      visitedRouteStore.init(affixRoutes)
    }
    if (to.path.startsWith('/redirect')) {
      return true
    }
    if (to.meta.noShowTabbar) {
      return true
    }
    if (to.query?.noShowTabbar) {
      return true
    }
    visitedRouteStore.add(to as unknown as RouteRecordRaw)
    return true
  })
}

export default useVisitedGuard
