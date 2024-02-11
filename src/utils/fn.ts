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
