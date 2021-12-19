<template>
  <div class="w-full flex flex-col gap-y-8 items-center pt-8">
    <div class="p-4 bg-gray-800 rounded-md w-96 max-w-full flex flex-col gap-y-2">
      <FormInput id="name" v-model="data.name">Imię i Nazwisko</FormInput>
      <FormInput id="email" v-model="data.email">Email</FormInput>
      <UiButton>Aktualizuj dane</UiButton>
    </div>

    <div class="p-4 bg-gray-800 rounded-md w-96 max-w-full flex flex-col gap-y-2">
      <FormInput id="password" v-model="data.password">Obecne Hasło</FormInput>
      <FormInput id="new-password" v-model="data.newPassword">Nowe Hasło</FormInput>
      <FormInput id="new-password-confirmation" v-model="data.newPasswordConfirmation">Potwierdź Nowe Hasło</FormInput>
      <UiButton>Zmień hasło</UiButton>
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
    newPassword: '',
    newPasswordConfirmation: ''
  })
</script>