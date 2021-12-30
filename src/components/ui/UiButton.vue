<template>
  <button
    v-bind="$attrs"
    class="px-4 py-2 text-white font-bold rounded-md transition"
    :class="[disabled ? 'bg-gray-600' : 'bg-blue-500 hover:bg-blue-600']"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>

<script lang="ts" setup>
const props = defineProps({
  disabled: {
    type: Boolean,
    default: () => false
  }
})
</script>