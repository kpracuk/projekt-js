import { createApp } from 'vue'
import notifications from '@kyvg/vue3-notification'

import App from './App.vue'
import './main.css'

import { router } from './router'
import { store } from "./store";
import { getCsrfToken, getUser } from "./api/endpoints/auth";
import { useAuthStore } from "./store/modules/auth";

const app = createApp(App)

app.use(store)
const authStore = useAuthStore()

getCsrfToken()
  .then(() => {
    getUser()
      .then(response => {
        authStore.setUser(response.data)
      })
      .finally(() => {
        app.use(router)
        app.use(notifications)
        app.mount('#app')
      })
  })
  .catch(error => {
    const event = new Event('app.api.getCsrfToken.error')
    window.dispatchEvent(event)
  })
