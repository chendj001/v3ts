<template>
  <div class="page" style="position:relative;">
    <n-layout position="absolute">
      <n-layout-header style="height: 48px; padding: 12px" bordered>
        头部
      </n-layout-header>
      <n-layout has-sider position="absolute" style="top: 48px; bottom: 48px">
        <n-layout-sider bordered content-style="padding: 24px;" :native-scrollbar="false" collapse-mode="width"
          :collapsed-width="0" :width="240" show-trigger="arrow-circle" collapsed-trigger-style="right: -10px;">
          侧边
          <router-link :to="{ name: 'Index' }">首页</router-link>
          <router-link :to="{ name: 'Md' }">Md</router-link>
          <router-link :to="{ name: 'Menu' }">菜单</router-link>
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
</script>

<style lang="scss" scoped></style>