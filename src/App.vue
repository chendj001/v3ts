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
  <n-notification-provider>
    <n-message-provider>
      <n-dialog-provider>
        <router-view />
      </n-dialog-provider>
    </n-message-provider>
  </n-notification-provider>
</template>

<style lang="scss">
html,
body,
#app,
.page {
  height: 100%;
}
</style>
