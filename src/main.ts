import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config'
import ToastService from 'primevue/toastservice'
import Nora from '@primeuix/themes/nora'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

const app = createApp(App)
app.use(PrimeVue, {
  theme: {
    preset: Nora,
  },
})
app.use(ToastService)
app.use(createPinia())
app.use(router)

app.mount('#app')
