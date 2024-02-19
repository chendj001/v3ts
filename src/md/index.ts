export const getMd = () => {
  let mds = import.meta.glob(['/src/md/**/*.md'])
  let routes: any[] = []
  for (let url in mds) {
    let path = url.replace(/^\/src|\.md$/g, '')
    let name = path.replace(/\/(\w)/g, (match, p1) => p1.toUpperCase())
    routes.push({
      path,
      name,
      component: mds[url],
      meta: {
        title: 'markdown',
        iconPrefix: 'icon',
        icon: 'md',
        noShowTabbar: true
      }
    })
  }
  routes = routes.reduce((prev, curr) => {
    if (curr.path.endsWith('/index')) {
      prev.push({
        path: curr.path.replace(/\/index/, ''),
        name: curr.name.replace(/Index/, ''),
        redirect: {
          name: curr.name
        },
        meta: {
          title: 'markdown',
          iconPrefix: 'icon',
          icon: 'md',
          noShowTabbar: true
        }
      })
    }
    prev.push(curr)
    return prev
  }, [])
  return routes
}
