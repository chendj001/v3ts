<script setup lang="ts">
import { RouterView } from 'vue-router'
import Jsdoc from '@/md/ts/resolver.md'
const dialogParams: Parameters<typeof useDialog>[0] = {
  name: '000'
}
useDialog(dialogParams)

const Menu = defineComponent({
  name:'Menu',
  setup() { },
  render() {
    return h('div', null, 'Hello')
  }
})
</script>

<template>
  <header>
    <Menu></Menu>
    <Jsdoc></Jsdoc>
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
