<template>
  <UiNavbar />
  <RouterView />
  <notifications position="bottom right" />
</template>

<script lang="ts" setup>
import UiNavbar from './components/ui/UiNavbar.vue';
import { onBeforeMount } from "vue";
import { csrf } from "./api/endpoints/csrf";

onBeforeMount(() => {
  csrf()
})
</script>

<style lang=postcss>
  @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap');

  body {
    @apply bg-gray-900 text-white;
  }
</style>