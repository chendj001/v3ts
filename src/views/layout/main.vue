<template>
  <div class="vaw-main-layout-container scrollbar">
    <section class="vaw-section">
      <TabBar />
    </section>
    <div class="main-base-style scrollbar">
      <section class="main-section">
        <Container></Container>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts" name="Main">
import Container from './container.vue'
import TabBar from "@/components/tabbar/index.vue";
</script>

<style lang="scss">
.vaw-section {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  background: #fff;
  z-index: 9;
}
.main-section {
  padding: 10px;
  padding-top: 50px;
}
</style>