import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import i18n from '@/plugins/i18n'
import './assets/styles/main.css'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

const app = createApp(App)

app.use(router)
app.use(createPinia())
app.use(i18n) // i18n qo‘shamiz
app.use(Toast, {
  position: 'bottom-right',
  timeout: 3000,
  closeButton: true,
  pauseOnHover: true,
  closeOnClick: true,
  draggable: true,
  showCloseButtonOnHover: false,
  transition: {
    enter: 'fadeIn',
    exit: 'fadeOut',
  },
})

app.mount('#app')
