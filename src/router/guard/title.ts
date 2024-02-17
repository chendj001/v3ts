import router from "@/router";
export default function usePageTitleGuard() {
  router.afterEach((to) => {
    if (to?.meta?.title) {
      const { title } = to.meta
      document.title = title as string
    } else {
      document.title = ''
    }
  })
}