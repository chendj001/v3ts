import useCachedGuard from "./cached";
import usePermissionGuard from "./permission";
import usePageTitleGuard from "./title";
import useVisitedGuard from "./visited";
/**
 * 路由守卫
 */
export default function useRouteGuard() {
  usePermissionGuard()
  useVisitedGuard()
  useCachedGuard()
  usePageTitleGuard()

}