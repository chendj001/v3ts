<template>
  <div class="main-container">
    <ExceptionStatus status="404" />
  </div>
</template>

<script lang="ts" setup name="Page404">
import { defineComponent, h } from 'vue';

const ExceptionStatus = defineComponent({
  setup() { },
  render() {
    return h('div', null, '404')
  }
})
</script>
