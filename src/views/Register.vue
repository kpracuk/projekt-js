<template>
  <div class="w-full flex justify-center pt-8">
    <div class="p-4 bg-gray-800 rounded-md w-96 max-w-full flex flex-col gap-y-2">
      <FormInput id="name" v-model="data.name">Imię i Nazwisko</FormInput>
      <FormInput id="email" v-model="data.email">Email</FormInput>
      <FormInput id="password" v-model="data.password">Hasło</FormInput>
      <FormInput id="password-confirmation" v-model="data.passwordConfirmation">Potwierdź Hasło</FormInput>
      <UiButton>Stwórz konto</UiButton>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { reactive } from 'vue';
  import FormInput from '../components/form/FormInput.vue'
  import UiButton from '../components/ui/UiButton.vue'

  const data = reactive({
    name: '',
    email: '',
    password: '',
    passwordConfirmation: ''
  })
</script>