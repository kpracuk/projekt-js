import { createApp } from 'vue'
import notifications from '@kyvg/vue3-notification'

import App from './App.vue'

import { router } from './router'
import { store } from "./store";

import './main.css'

const app = createApp(App)

app.use(router)
app.use(store)
app.use(notifications)

app.mount('#app')
