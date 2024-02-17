<template>
  <div>
    <div>Layout</div>
    <router-link :to="{name:'Index'}">Index</router-link>
    <router-link :to="{name:'Md'}">Md</router-link>
    <router-view></router-view>
  </div>
  
</template>

<script setup lang="ts" name="Layout">

</script>

<style lang="scss" scoped></style>