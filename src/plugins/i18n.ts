import { createI18n } from 'vue-i18n'
import en from '@/locales/en'
import uz from '@/locales/uz'

const savedLocale = localStorage.getItem('user-lang') || 'uz'

const i18n = createI18n({
  locale: savedLocale,
  fallbackLocale: 'en', // Agar tarjima topilmasa
  messages: {
    en,
    uz,
  },
})

export default i18n
