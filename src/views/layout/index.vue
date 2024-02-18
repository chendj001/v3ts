<template>
  <div class="page" style="position:relative;">
    <n-layout position="absolute">
      <n-layout-header style="height: 48px; padding: 12px" bordered>
        头部
      </n-layout-header>
      <n-layout has-sider position="absolute" style="top: 48px; bottom: 48px">
        <n-layout-sider bordered :native-scrollbar="false" collapse-mode="width" :collapsed-width="0" :width="240"
          show-trigger="arrow-circle" collapsed-trigger-style="right: -10px;">
          <n-menu :value="menuValue" :options="menuOptions" :render-label="renderMenuLabel" />
        </n-layout-sider>
        <n-layout :native-scrollbar="false">
          <Main></Main>
        </n-layout>
      </n-layout>
      <n-layout-footer bordered position="absolute" style="height: 48px; padding: 12px">
        底部
      </n-layout-footer>
    </n-layout>
  </div>
</template>

<script setup lang="ts" name="Layout">
import { RouterLink } from 'vue-router';
import Main from './main.vue'
import { useLoadingBar } from "naive-ui";
const router = useRouter();
const loadingBar = useLoadingBar();
router.beforeEach(() => {
  loadingBar?.start();
});
router.afterEach(() => {
  loadingBar?.finish();
});

const menuOptions = [{
  label: '首页',
  key: 'index',
  name: 'Index',
}, {
  label: '文档',
  key: 'md',
  name: 'Md'
}, {
  label: '菜单',
  key: 'menu',
  name: 'Menu'
}]
const menuValue = ''
const renderMenuLabel = (option: any) => {
  return h(
    RouterLink,
    {
      to: { name: option.name }
    },
    { default: () => option.label }
  )
}


</script>

<style lang="scss" scoped></style>