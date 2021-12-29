<template>
  <div class="w-full flex justify-center pt-8">
    <div class="p-4 bg-gray-800 rounded-md w-96 max-w-full flex flex-col gap-y-2">
      <FormInput id="email" v-model="data.email" placeholder="Wpisz swój Email">Email</FormInput>
      <FormInput id="password" v-model="data.password" placeholder="Super tajne hasło">Hasło</FormInput>
      <RouterLink to="/register" class="mt-2 text-gray-100 hover:underline hover:text-gray-300 text-sm font-bold">
        Nie masz konta? Zarejestruj się!
      </RouterLink>
      <UiButton>Zaloguj</UiButton>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { reactive } from 'vue';
  import FormInput from '../components/form/FormInput.vue'
  import UiButton from '../components/ui/UiButton.vue'

  const data = reactive({
    email: '',
    password: ''
  })
</script>