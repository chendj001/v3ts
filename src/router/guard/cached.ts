import useCachedRoutesStore from "@/stores/modules/cached-routes";
import router from "..";
import { findCachedRoutes } from "@/stores/help";

export default function useCachedGuard() {
  router.beforeEach(() => {
    const cachedRouteStore = useCachedRoutesStore()
    if (cachedRouteStore.cachedRoutes.length === 0) {
      cachedRouteStore.init(findCachedRoutes(router.getRoutes()))
    }
  })
}