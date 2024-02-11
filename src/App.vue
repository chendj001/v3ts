<script setup lang="ts">
import { RouterView } from 'vue-router'
import Jsdoc from '@/md/ts/typing.md'
</script>

<template>
  <header>
    header
    <Jsdoc></Jsdoc>
  </header>
  <RouterView />
</template>

<style lang="scss">
#app {
  width: 900px;
  padding-top: 50px;
  margin: 0 auto;
}
</style>
