import type { RouteRecordRaw } from "vue-router";

import asyncRoutes from '@/router/routes/async'

const Layout = () => import('@/views/layout/index.vue')

/**
 * 将两个路径合并为一个路径
 * @param path1 第一个路径
 * @param path2 第二个路径
 * @returns 合并后的路径
 */
export function resolvePath(path1: string, path2: string) {
  let path;
  if (!path2.startsWith(path1)) {
    path = path1 + path2
  }
  return path?.replace(/\\/g, '/')
}

export function loadComponents() {
  return import.meta.glob('/src/views/**/*.vue')
}
export function getFilePath(it: RouteRecordRaw) {
  it.path = resolvePath('/', it.path) as string
  return '/src/views' + it.path + '.vue'
}
export function getComponent(it: RouteRecordRaw) {
  return loadComponents()[getFilePath(it)]
}

/**
 * 找到根目录
 */
export function findRootPathRoute(routes: RouteRecordRaw[]): RouteRecordRaw | undefined {
  for (const route of routes) {
    if (route.meta && route.meta.isRootPath) {
      return route;
    }
    if (route.children) {
      const childRoute: any = findRootPathRoute(route.children);
      if (childRoute) {
        return childRoute;
      }
    }
  }
  return undefined;
}

export function isLocalRoute(route: RouteRecordRaw, localRoutes: RouteRecordRaw[], path = '/') {
  for (const localRoute of localRoutes) {
    if (route.path === resolvePath(path, localRoute.path)) {
      return localRoute
    }
    if (localRoute.children) {
      const childRoute: any = filterRoutesFromLocalRoutes(route, localRoute.children, resolvePath(path, localRoute.path))
      if (childRoute) {
        return childRoute
      }
    }
  }
  return undefined
}
export function generatorRoutes(res: RouteRecordRaw[]) {
  const tempRoutes: RouteRecordRaw[] = []
  res.forEach((it) => {
    // 是否是目录
    const isMenu = it.children && it.children.length > 0
    const localRoute = isMenu ? isLocalRoute(it, asyncRoutes) : null
    if (localRoute) {
      tempRoutes.push(localRoute)
    } else {
      // @ts-ignore
      const route: RouteRecordRaw = {
        ...it,
        component: isMenu ? Layout : getComponent(it)
      }
      if (it.children) {
        route.children = generatorRoutes(it.children)
      }
      tempRoutes.push(route)
    }
  })
  return tempRoutes
}
/**
 * 找到固定的路由
 * @param routes 
 */
export function findAffixedRoutes(routes: RouteRecordRaw[]) {
  const temp: RouteRecordRaw[] = []
  routes.forEach(route => {
    if (route?.meta?.affix) {
      temp.push(route)
    }
  })
  return temp
}
/**
 * 找到是否能缓存的路由
 * @param routes 
 */
export function findCachedRoutes(routes: Array<RouteRecordRaw>) {
  const temp: RouteRecordRaw[] = []
  routes.forEach((route) => {
    if (route.name && route.meta && route.meta.cacheable) {
      temp.push(route)
    }
  })
  return temp
}