<template>
  <div class="w-full flex flex-col gap-y-8 items-center pt-8">
    <div class="p-4 bg-gray-800 rounded-md w-96 max-w-full flex flex-col gap-y-2">
      <FormInput id="name" v-model="data.name" :errors="data.errors.name">Imię i Nazwisko</FormInput>
      <FormInput id="email" type="email" v-model="data.email" :errors="data.errors.email">Email</FormInput>
      <UiButton @click="attemptProfileInformationUpdate()" :disabled="data.isLoading">{{ data.isLoading ? 'Daj nam chwilę...' : 'Aktualizuj dane' }}</UiButton>
    </div>

    <div class="p-4 bg-gray-800 rounded-md w-96 max-w-full flex flex-col gap-y-2">
      <FormInput id="current_password" type="password" v-model="data.current_password" :errors="data.errors.current_password">Obecne Hasło</FormInput>
      <FormInput id="password" type="password" v-model="data.password" :errors="data.errors.password">Nowe Hasło</FormInput>
      <FormInput id="password_confirmation" type="password" v-model="data.password_confirmation" :errors="data.errors.password_confirmation">Potwierdź Nowe Hasło</FormInput>
      <UiButton @click="attemptPasswordUpdate()" :disabled="data.isLoading">{{ data.isLoading ? 'Daj nam chwilę...' : 'Zmień hasło' }}</UiButton>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { onMounted, reactive } from 'vue';
  import FormInput from '../components/form/FormInput.vue'
  import UiButton from '../components/ui/UiButton.vue'
  import { getUser, updateUserProfileInformation, updateUserPassword } from "../api/endpoints/auth";
  import { notify } from "@kyvg/vue3-notification";
  import { useAuthStore } from "../store/modules/auth";

  const authStore = useAuthStore()

  const data = reactive({
    name: '',
    email: '',
    current_password: '',
    password: '',
    password_confirmation: '',
    isLoading: false,
    errors: {} as {[key: string]: string[]},
    errorMessage: null
  })

  onMounted(() => {
    data.name = authStore?.getUser?.name || ''
    data.email = authStore?.getUser?.email || ''
  })

  const attemptProfileInformationUpdate = () => {
    data.errors = Object.assign({})
    data.errorMessage = null
    data.isLoading = true
    updateUserProfileInformation(data)
      .then((response) => {
        getUser()
          .then(response => {
            authStore.setUser(response.data)
            const user = authStore.getUser
            notify({
              type: 'success',
              title: 'Udało się!',
              text: 'Dane zostały pomyślnie zaktualizowane',
            })
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

  const attemptPasswordUpdate = () => {
    data.errors = Object.assign({})
    data.errorMessage = null
    data.isLoading = true
    updateUserPassword(data)
      .then((response) => {
        data.current_password = ''
        data.password = ''
        data.password_confirmation = ''
        notify({
          type: 'success',
          title: 'Udało się!',
          text: 'Hasło zostało pomyślnie zmienione',
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