import useUserStore from "@/stores/modules/user";
import usePermissionStore from "@/stores/modules/permission";
import router from "..";
import useVisitedRouteStore from "@/stores/modules/visited-routes";
const whiteRoutes: string[] = ["/login", "/404", "/403", "/500"];
import loadVirtual from "@/views/virtual";
function usePermissionGuard() {
  router.beforeEach(async (to) => {
    if (whiteRoutes.includes(to.path)) {
      return true;
    }
    const userStore = useUserStore();
    if (userStore.isTokenExpire()) {
      return {
        path: "/login",
        query: { redirect: to.fullPath },
      };
    }
    const permissionStore = usePermissionStore();
    const isEmptyRoute = permissionStore.isEmpty();
    if (isEmptyRoute) {
      await permissionStore.init();
      const visitedRouteStore = useVisitedRouteStore();
      visitedRouteStore.visitedRoutes.map(async (item: any) => {
        console.log("注册动态路由：", item.name);
        if (!router.hasRoute(item.name)) {
          await loadVirtual(item);
        }
      });
      if (to.path.startsWith("/index/virtual")) {
        let id = to.path.replace("/index/virtual", "");
        console.log("注册初次动态路由：", to.path);
        if (!router.hasRoute(`Virtual${id}`)) {
          await loadVirtual(to);
        }
      }
      return { ...to, replace: true };
    }
    return true;
  });
}

export default usePermissionGuard;
