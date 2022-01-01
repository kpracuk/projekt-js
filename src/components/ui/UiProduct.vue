<template>
  <div class="flex justify-between items-start w-full p-4 bg-gray-900 rounded-md">
    <div class="flex flex-col">
      <span class="text-xl font-bold">
        {{ name }}
      </span>
      <span class="font-bold text-gray-400 pr-24">
        {{ description }}
      </span>
    </div>
    <div class="flex items-center gap-x-4 flex-shrink-0">
      <div class="flex flex-col items-end">
        <span>
        {{ (price / 100).toFixed(2) }} PLN
      </span>
      <span class="text-sm text-gray-400">
        Dostępne sztuki: {{ quantity }}
      </span>
      </div>
      <UiButton>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      </UiButton>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import UiButton from "./UiButton.vue";

  const props = defineProps({
    name: String,
    description: String,
    quantity: Number,
    price: Number
  })
</script>