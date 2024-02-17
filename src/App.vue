<script setup lang="ts">
import { RouterView } from 'vue-router'
const dialogParams: Parameters<typeof useDialog>[0] = {
  name: '000'
}
useDialog(dialogParams)

const Menu = defineComponent({
  name: 'Menu',
  setup() { },
  render() {
    return h('div', null, 'Hello')
  }
})
copyToClipboard('123')

getVer('ppp')

import useUserStore from '@/stores/modules/user'
import useAppConfigStore from './stores/modules/app-config';
const userStore = useUserStore()
const appConfig = useAppConfigStore()
userStore.update({ nickName: '000' })
userStore.updateByName('token', '000')
console.log(appConfig.version)
</script>

<template>
  <header>
    <Menu></Menu>
  </header>
  <RouterView />
</template>

<style lang="scss">
#app {
  max-width: 900px;
  padding-top: 50px;
  margin: 0 auto;
}
</style>
