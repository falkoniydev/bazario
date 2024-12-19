<template>
  <div class="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded">
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
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore } from '@/stores/authStore'
import { useToast } from 'vue-toastification'
const toast = useToast()

const authStore = useAuthStore()
const email = ref('')

const handleForgotPassword = () => {
  toast.success("Parolni qayta tilkalsh bo'yicha ko'rsatma emailingizga yuborildi!")
}
</script>
