<template>
  <router-view v-slot="{ Component, route }">
    <transition mode="out-in" appear>
      <keep-alive :include="cachedRoutes">
        <component :is="Component" :key="route.fullPath" />
      </keep-alive>
    </transition>
  </router-view>
</template>

<script lang="ts">
import useAppConfigStore from '@/stores/modules/app-config'
import useCachedRouteStore from '@/stores/modules/cached-routes'
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Main',
  setup() {
    const appConfig = useAppConfigStore()
    const cachedRouteStore = useCachedRouteStore()
    const cachedRoutes: any = computed(() => {
      return cachedRouteStore.cachedRoutes.map(item => item.name)
    })
    return {
      cachedRouteStore,
      cachedRoutes
    }
  },
})
</script>
