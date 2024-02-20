<template>
  <router-view v-slot="{ Component, route }">
    <transition name="opacity-transform" mode="out-in" appear>
      <keep-alive :include="cachedRoutes">
        <component :is="Component" :key="route.fullPath" />
      </keep-alive>
    </transition>
  </router-view>
</template>

<script lang="ts" name="Keep" setup>
import useAppConfigStore from '@/stores/modules/app-config'
import useCachedRouteStore from '@/stores/modules/cached-routes'

const appConfig = useAppConfigStore()
const cachedRouteStore = useCachedRouteStore()
const cachedRoutes: any = computed(() => {
  return cachedRouteStore.cachedRoutes.map(item => item.name)
})
</script>
