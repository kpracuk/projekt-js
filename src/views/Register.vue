<template>
  <div class="w-full flex justify-center pt-8">
    <div class="p-4 bg-gray-800 rounded-md w-96 max-w-full flex flex-col gap-y-2">
      <FormInput id="name" v-model="data.name" :errors="data.errors.name">Imię i Nazwisko</FormInput>
      <FormInput id="email" type="email" v-model="data.email" :errors="data.errors.email">Email</FormInput>
      <FormInput id="password" type="password" v-model="data.password" :errors="data.errors.password">Hasło</FormInput>
      <FormInput id="password-confirmation" type="password" v-model="data.password_confirmation" :errors="data.errors.password_confirmation">Potwierdź Hasło</FormInput>
      <UiButton @click="attemptRegister()" :disabled="data.isLoading">{{ data.isLoading ? 'Daj nam chwilę...' : 'Stwórz konto' }}</UiButton>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { reactive } from 'vue';
  import { getUser, registerUser } from "../api/endpoints/auth";
  import { useAuthStore } from "../store/modules/auth";
  import { notify } from "@kyvg/vue3-notification";

  import FormInput from '../components/form/FormInput.vue'
  import UiButton from '../components/ui/UiButton.vue'
  import { useRouter } from "vue-router";

  const authStore = useAuthStore()
  const router = useRouter()

  const data = reactive({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    isLoading: false,
    errors: {} as {[key: string]: string[]},
    errorMessage: null
  })

  const attemptRegister = () => {
    data.errors = Object.assign({})
    data.errorMessage = null
    data.isLoading = true
    registerUser(data)
      .then((response) => {
        notify({
          type: 'success',
          title: "Dziękujemy za rejestrację!",
          text: "Możesz się teraz zalogować do naszego serwisu",
        });
        getUser()
          .then(response => {
            authStore.setUser(response.data)
            router.push('/')
          })
      })
      .catch((error) => {
        data.errors = Object.assign({}, error.response?.data?.errors || {})
        data.errorMessage = error.response?.data?.message || null
        notify({
          type: 'error',
          title: "Wystąpił błąd",
          text: data.errorMessage || 'Przepraszamy za problemy techniczne',
        });
      })
    .finally(() => {
      data.isLoading = false
    })
  }
</script>