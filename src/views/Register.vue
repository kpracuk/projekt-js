<template>
  <div class="w-full flex justify-center pt-8">
    <div class="p-4 bg-gray-800 rounded-md w-96 max-w-full flex flex-col gap-y-2">
      <FormInput id="name" v-model="data.name" :errors="data.errors.name">Imię i Nazwisko</FormInput>
      <FormInput id="email" v-model="data.email" :errors="data.errors.email">Email</FormInput>
      <FormInput id="password" type="password" v-model="data.password" :errors="data.errors.password">Hasło</FormInput>
      <FormInput id="password-confirmation" type="password" v-model="data.password_confirmation" :errors="data.errors.password_confirmation">Potwierdź Hasło</FormInput>
      <UiButton @click="attemptRegister()">Stwórz konto</UiButton>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { reactive } from 'vue';
  import { register } from "../api/endpoints/auth";
  import { notify } from "@kyvg/vue3-notification";

  import FormInput from '../components/form/FormInput.vue'
  import UiButton from '../components/ui/UiButton.vue'

  const data = reactive({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    errors: {} as {[key: string]: string[]},
    errorMessage: null
  })

  const attemptRegister = () => {
    notify({
      type: 'success',
      title: "Authorization",
      text: "You have been logged in!",
    });
    data.errors = Object.assign({})
    data.errorMessage = null

    register(data)
      .then((response) => {

      })
      .catch((error) => {
        data.errors = Object.assign({}, error.response.data.errors)
        data.errorMessage = error.response.data.message
      })
  }
</script>