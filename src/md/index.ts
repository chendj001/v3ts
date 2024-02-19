function pathToObjectPath(path: string, objPath: any, component: any): any {
  const pathArray = path
    .split('/')
    .filter((item) => !['', 'src'].includes(item))

  let currentObj: any = objPath
  for (let item of pathArray) {
    currentObj.children = currentObj.children || []
    let existingChild = currentObj.children.find(
      (child: any) => Object.keys(child)[0] === item
    )
    if (existingChild) {
      currentObj = existingChild[item]
    } else {
      let newObj: any = { [item]: { label: item, key: item, children: [] } }
      if (item.endsWith('.md')) {
        let label=item.replace(/\.md/,'');
        newObj = { [label]: { component: component } }
      }
      currentObj.children.push(newObj)
      currentObj = newObj[item]
    }
  }
  return objPath
}

export const getMd = () => {
  let mds = import.meta.glob(['/src/md/**/*.md'])
  let objPath: any = {}
  for (let path in mds) {
    pathToObjectPath(path, objPath, mds[path])
  }
  if (objPath.children) {
    console.log(objPath.children[0])
  }

  return mds
}
