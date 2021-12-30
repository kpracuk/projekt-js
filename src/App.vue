<template>
  <main class="min-h-screen flex flex-col bg-gray-900 text-white">
    <UiNavbar />
    <RouterView />
    <notifications position="bottom right" />
  </main>
</template>

<script lang="ts" setup>
import UiNavbar from './components/ui/UiNavbar.vue';
</script>

<style lang="postcss">
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap');
</style>