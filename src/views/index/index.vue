<template>
  <div>
    <div class="menu">
      <div class="menu-content">
        <div class="menu-cell" v-for="(item, index) in data" :key="index">{{ item }}</div>
      </div>
    </div>
    <div class="menu">
      <div class="menu-content">
        <div class="menu-cell" style="grid-column: 1 /span  2; grid-row: 1 /span 2;">
          <img class="menu-icon" src="https://lf1-cdn-tos.bytegoofy.com/goofy/ies/douyin_web/public/favicon.ico" alt="">
        </div>
        <div class="menu-cell" style="grid-column: 3 / -1; grid-row: 1 /span 2;">
          <div style="grid-row: 1 /span 3; grid-column: 1/ -1;" class="menu-title">抖音:记录美好生活</div>
          <div class="menu-desc">3.8⭐</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const data = ref(new Array(21).fill('').map((value, index) => index + 1))
</script>

<style lang="scss" scoped>
.menu {
  display: inline-block;
  vertical-align: top;
  background: rgba(24, 160, 88, 0.16);
  margin-right: 10px;
  $size: 32px;

  &-content {
    display: grid;
    width: 280px;
    height: 126px;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 5px;
    padding: 10px;
  }

  &-cell {
    color: #fff;
    background: #18a058;
    border-radius: 4px;
    cursor: pointer;
  }

  &-icon {
    display: block;
    width: 100%;
  }

  &-title {
    font-weight: bold;
  }
}
</style>