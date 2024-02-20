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
  console.log('使用弹窗useDialog=>', params)
  return
}
/**
 * 复制到粘贴板上
 */
export async function copyToClipboard(text: string) {
  try {
    return navigator.clipboard.writeText(text)
  } catch {
    const element = document.createElement('textarea')
    const previouslyFocusedElement: any = document.activeElement
    element.value = text
    element.setAttribute('readonly', '')
    element.style.contain = 'strict'
    element.style.position = 'absolute'
    element.style.left = '-9999px'
    element.style.fontSize = '12pt'
    const selection: any = document.getSelection()
    const originalRange = selection
      ? selection.rangeCount > 0 && selection.getRangeAt(0)
      : null
    document.body.appendChild(element)
    element.select()
    element.selectionStart = 0
    element.selectionEnd = text.length
    document.execCommand('copy')
    document.body.removeChild(element)
    if (originalRange) {
      selection.removeAllRanges()
      selection.addRange(originalRange)
    }
    if (previouslyFocusedElement) {
      previouslyFocusedElement.focus()
    }
  }
}

/**
 * 获取版本
 */
export async function getVer(params: string) {
  return '1.0.0'
}
/**
 * 将数组按照指定的条件分组
 * @param array 
 * @param key 
 */
export function groupBy<T, K extends keyof T>(
  array: T[],
  key: K
): Record<T[K], T[]> {
  return array.reduce((result, currentValue) => {
    const groupKey = currentValue[key]

    if (!result[groupKey]) {
      result[groupKey] = []
    }

    result[groupKey].push(currentValue)

    return result
  }, {} as Record<T[K], T[]>)
}
