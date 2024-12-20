<template>
  <div class="max-w-md mx-auto p-6 bg-white shadow-lg rounded pt-[28px] mt-[150px] relative">
    <h2 class="text-2xl font-bold mb-6 text-center text-[#1C4D9C]">Parolni Tiklash</h2>
    <form @submit.prevent="handleForgotPassword">
      <input
        v-model="email"
        type="email"
        placeholder="Email"
        class="border p-2 w-full mb-4 rounded"
      />
      <button
        type="submit"
        class="w-full bg-[#1C4D9C] text-white py-2 rounded"
        :disabled="authStore.loading"
      >
        <span v-if="authStore.loading">Yuklanmoqda...</span>
        <span v-else>Yuborish</span>
      </button>
    </form>

    <div class="absolute top-5 right-5">
      <button @click="backHome">
        <XMarkIcon class="text-[48px] text-blue-950 w-10 h-10" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore } from '@/stores/authStore'
import { useToast } from 'vue-toastification'
import { useRouter } from 'vue-router'
import { XMarkIcon } from '@heroicons/vue/24/outline'
const toast = useToast()

const authStore = useAuthStore()
const email = ref('')
const router = useRouter()

const handleForgotPassword = () => {
  toast.success("Parolni qayta tilkalsh bo'yicha ko'rsatma emailingizga yuborildi!")
  email.value = ''
}

const backHome = () => {
  router.push('/')
}
</script>
