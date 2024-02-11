import { join } from 'path'
import { normalizePath } from 'vite'
let hooks = ['sleep']

import type { Resolver } from 'unplugin-auto-import/types'
function resolveHooks(name: string) {
  if (!hooks) return
  if (!hooks.includes(name)) return

  return {
    name,
    from: normalizePath(join(process.cwd(), './src/utils/index.ts'))
  }
}

export function LibResolver(): Resolver {
  return (name) => {
    return resolveHooks(name)
  }
}
export default LibResolver
