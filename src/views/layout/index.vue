<template>
  <div class="page" style="position:relative;">
    <n-layout position="absolute">
      <!-- <n-layout-header style="height: 48px; padding: 12px" bordered>
        头部
      </n-layout-header> -->
      <n-layout has-sider position="absolute">
        <n-layout-sider bordered :native-scrollbar="false" collapse-mode="width" :collapsed-width="0" :width="210"
          show-trigger="arrow-circle" collapsed-trigger-style="right: -10px;">
          <n-menu :root-indent="10" :indent="8" :options="menuOptions" :render-label="renderMenuLabel" />
        </n-layout-sider>
        <n-layout :native-scrollbar="false">
          <Main></Main>
        </n-layout>
      </n-layout>
      <!-- <n-layout-footer bordered position="absolute" style="height: 48px; padding: 12px">
        底部
      </n-layout-footer> -->
    </n-layout>
  </div>
</template>

<script setup lang="ts" name="Layout">
import { RouterLink } from 'vue-router';
import SvgIcon from '@/components/svg-icon/index.vue'
import Main from './main.vue'
import { NBadge, NIcon, useLoadingBar } from "naive-ui";
const router = useRouter();
const loadingBar = useLoadingBar();
router.beforeEach(() => {
  loadingBar?.start();
});
router.afterEach(() => {
  loadingBar?.finish();
});
const renderIcon = (name: string) => {
  return () => h(NIcon, null, { default: () => h(SvgIcon, { name }) })
}
const menuOptions = [
  {
    label: 'Dashborad',
    key: 'dash',
    icon: renderIcon('dashboard'),
    children: [
      {
        label: '主控台',
        key: 'index',
        name: 'Index',
        icon: renderIcon('menu')
      }, {
        label: '工作台',
        key: 'md',
        name: 'Md',
        icon: renderIcon('menu')
      }, {
        label: '标签栏操作',
        key: 'menu',
        name: 'Menu',
        icon: renderIcon('menu'),
        badge: 'New'
      }
    ]
  },
]
const renderMenuLabel = (option: any) => {
  if (!option.name) {
    return option.label
  }
  return h(
    RouterLink,
    {
      to: { name: option.name }
    },
    {
      default: () => option.badge ? h('div', {
        style: 'display:flex;width:100%;justify-content: space-between'
      }, [
        h('div', null, option.label),
        h(NBadge, {
          size: 'small',
          type: 'success',
          value: option.badge,
          offset: [17, 4]
        })
      ]) : option.label
    }
  )
}


</script>

<style lang="scss" scoped></style>