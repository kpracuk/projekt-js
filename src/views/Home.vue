<template>
<div class="flex-grow flex items-center justify-center w-full pb-16">
  <div class="flex flex-col items-center">
    <h1 class="text-7xl font-bold text-blue-500">JASNY GWINT</h1>
    <h2 class="text-5xl font-light tracking-wider text-white mb-8">SKLEP ZE ŚRUBAMI</h2>
    <router-link class="flex items-center font-bold gap-x-2 px-4 py-2 hover:bg-blue-500 rounded transition text-white text-2xl" :to="authStore.isLoggedIn ? '/products' : '/login'">
      {{ authStore.isLoggedIn ? 'Obczaj nasze śruby byku' : 'Zaloguj się' }}
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
      </svg>
    </router-link>
  </div>
</div>
</template>

<script lang="ts" setup>
import { useAuthStore } from "../store/modules/auth";

const authStore = useAuthStore()
</script>