export const getMd = () => {
  let mds = import.meta.glob(['/src/md/**/*.md'])
  let obj: any = {}
  let temp: any = obj
  for (let path in mds) {
    let arr = path.split('/')
    console.log(arr)
    arr.map((item) => {
      if (item) {
        if (item !== 'src' && !item.endsWith('.md')) {
          obj[item] = {}
          temp = {}
        }
      }
    })
    console.log(obj)
  }
  return mds
}

let opt = {
  label: 'md',
  children: [
    {
      label: 'js',
      children: [
        {
          label: 'fn',
          name: 'MdJsFn'
        }
      ]
    }
  ]
}
