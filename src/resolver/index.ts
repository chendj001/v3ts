import { join } from 'path'
import { normalizePath } from 'vite'
// 使用类型
import type { Resolver } from 'unplugin-auto-import/types'
/**
 * 暴露哪些函数可以直接使用
 */
let hooks = ['sleep', 'useDialog']

function resolveHooks(name: string) {
  if (!hooks) return
  if (!hooks.includes(name)) return
  return {
    name,
    // 拼接路径并序列化
    from: normalizePath(join(process.cwd(), './src/utils/index.ts'))
  }
}

export function LibResolver(): Resolver {
  return (name) => {
    return resolveHooks(name)
  }
}
export default LibResolver
