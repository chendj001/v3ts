<template>
  <div class="vaw-main-layout-container scrollbar">
    <section>
      <TabBar />
    </section>
    <div class="main-base-style scrollbar">
      <section class="main-section">
        <Container></Container>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import Container from './container.vue'
import TabBar from "@/components/tabbar/index.vue";
const showNavBar = true;
</script>

<style scoped></style>