import router from "@/router";

/**
 * 加载虚拟组件
 * @param to 
 * @returns 
 */
export default async function loadVirtual(to: any) {
  return new Promise((resolve) => {
    const name = to.name;
    router.addRoute("Dashboard", {
      path: name,
      name: name,
      meta: {
        title: `动态路由`,
        iconPrefix: "custom",
        icon: "menu",
        cacheable: true,
      },
      component: () =>
        import("@/views/virtual/index.vue").then((res) => {
          res.default.name = name
          return res;
        }),
    });
    resolve(true);
  });
}
