<template>
  <div class="flex flex-col">
    <label :for="id" class="text-sm text-blue-500 font-bold">
      <slot />
    </label>
    <input
        v-bind="$attrs"
        :id="id"
        class="p-2 border-2 border-gray-500 focus:border-blue-500 transition bg-gray-900 text-white rounded-md focus:outline-none"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script lang="ts" setup>
  const props = defineProps({
    modelValue: {
      type: String,
      default: () => ''
    },
    id: {
      type: String,
      required: true
    }
  })

  const emits = defineEmits([
    'update:modelValue'
  ])
</script>