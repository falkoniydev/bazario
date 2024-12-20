<!-- <template>
  <div class="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded">
    <h2 class="text-2xl font-bold mb-6 text-center text-[#1C4D9C]">Kirish</h2>
    <form @submit.prevent="handleLogin">
      <input
        v-model="username"
        type="text"
        placeholder="Username"
        class="border p-2 w-full mb-4 rounded"
      />
      <input
        v-model="password"
        type="password"
        placeholder="Password"
        class="border p-2 w-full mb-4 rounded"
      />
      <button type="submit" class="w-full bg-[#1C4D9C] text-white py-2 rounded">
        <span v-if="authStore.loading">Yuklanmoqda...</span>
        <span v-else>Kirish</span>
      </button>
    </form>
    <p v-if="authStore.error" class="text-red-500 text-center mt-4">{{ authStore.error }}</p>
    <p class="text-center mt-4">
      Hisobingiz yo'qmi?
      <router-link to="/register" class="text-[#EE6027]">Ro'yxatdan o'tish</router-link>
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore } from '../../stores/authStore'

const authStore = useAuthStore()

const username = ref('')
const password = ref('')

const handleLogin = () => {
  authStore.login(username.value, password.value)
}
</script> -->

<template>
  <div class="max-w-md mx-auto p-6 bg-white shadow-lg rounded pt-[28px] mt-[150px] relative">
    <h2 class="text-2xl font-bold mb-6 text-center text-[#1C4D9C]">Kirish</h2>
    <form @submit.prevent="handleLogin">
      <input
        v-model="username"
        type="text"
        placeholder="Username"
        class="border p-2 w-full mb-4 rounded"
      />
      <input
        v-model="password"
        type="password"
        placeholder="Password"
        class="border p-2 w-full mb-4 rounded"
      />
      <button
        type="submit"
        class="w-full bg-[#1C4D9C] text-white py-2 rounded"
        :disabled="authStore.loading"
      >
        <span v-if="authStore.loading">Yuklanmoqda...</span>
        <span v-else>Kirish</span>
      </button>
    </form>
    <p v-if="authStore.error" class="text-red-500 text-center mt-4">{{ authStore.error }}</p>
    <p class="text-center mt-4">
      Hisobingiz yo'qmi?
      <router-link to="/auth/register" class="text-[#EE6027]">Ro'yxatdan o'tish</router-link>
    </p>

    <p class="text-center mt-4 text-[12px]">
      Parolni unutdingizmi?
      <router-link to="/auth/forgot-password" class="text-[#EE6027]">Parolni tiklash</router-link>
    </p>

    <div class="absolute top-5 right-5">
      <button @click="backHome">
        <XMarkIcon class="text-[48px] text-blue-950 w-10 h-10" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../../stores/authStore'
import { useToast } from 'vue-toastification'
import { XMarkIcon } from '@heroicons/vue/24/outline'

const authStore = useAuthStore()
const router = useRouter()
const toast = useToast()

const username = ref('')
const password = ref('')

const handleLogin = async () => {
  await authStore.login(username.value, password.value)
  if (!authStore.error) router.push('/')
  toast.success('Login muvaffaqiyatli!')
}

const backHome = () => {
  router.push('/')
}
</script>

<style scoped>
body {
  background-color: #bf1010 !important;
}
</style>
