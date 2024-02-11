/**
 * 睡眠几秒
 */
export async function sleep(time: number): Promise<boolean> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true)
    }, time)
  })
}

/**
 * 使用弹窗
 */
export async function useDialog(params: { name: string }) {
  console.log('使用弹窗useDialog=>',params)
  return
}
