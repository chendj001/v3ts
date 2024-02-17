import "./auto-imports"
import { RouteMeta } from 'vue-router'
import { IRouteMeta,IGlobalProperties } from '@/types'
declare module '*.md' {
  import type { ComponentOptions } from 'vue'
  const Component: ComponentOptions
  export default Component
}
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties extends IGlobalProperties {}
}
declare module 'vue-router' {
  interface RouteMeta extends IRouteMeta {}
}

/// <reference types="vite/client" />