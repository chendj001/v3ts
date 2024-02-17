<template>
  <div class="redirect-contianer"></div>
</template>

<script lang="ts" setup name="Redirect" >
import { useRoute, useRouter } from 'vue-router';
const route = useRoute();
const router = useRouter();
const { params, query } = route;
const { path } = params;
router.replace({
  path: "/" + (typeof path === "string" ? path : path.join("/")),
  query,
});
</script>
