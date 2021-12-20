<template>
  <div class="flex justify-between w-full p-4 bg-gray-900 rounded-md">
    <div class="flex flex-col">
      <span class="text-xl font-bold">
        {{ productName }}
      </span>
    </div>
    <div class="flex items-center gap-x-4">
      <span>
        {{ (price / 100).toFixed(2) }} PLN
      </span>
      <span>
        {{ date }}
      </span>
    </div>
  </div>
</template>

<script lang="ts" setup>
  const props = defineProps({
    productName: String,
    price: Number,
    date: String
  })
</script>