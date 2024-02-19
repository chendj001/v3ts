import { h, type Component } from 'vue'
import { NIcon } from 'naive-ui'
import SvgIcon from '@/components/svg-icon/index.vue'

export const renderIcon = (icon: Component) => {
  return () => h(NIcon, null, { default: () => h(icon) })
}

export const renderIconByName = (name: string) => {
  return () => h(NIcon, null, { default: () => h(SvgIcon, { name }) })
}
