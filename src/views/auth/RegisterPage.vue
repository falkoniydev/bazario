<!-- <template>
  <div class="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded">
    <h2 class="text-2xl font-bold mb-6 text-center text-[#1C4D9C]">Ro'yxatdan o'tish</h2>
    <form @submit.prevent="handleRegister">
      <input
        v-model="username"
        type="text"
        placeholder="Username"
        class="border p-2 w-full mb-4 rounded"
      />
      <input
        v-model="email"
        type="email"
        placeholder="Email"
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
        <span v-else>Ro'yxatdan o'tish</span>
      </button>
    </form>
    <p class="text-center mt-4">
      Hisobingiz bormi?
      <router-link to="/login" class="text-[#EE6027]">Kirish</router-link>
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore } from '../../stores/authStore'
import { useRouter } from 'vue-router'

const authStore = useAuthStore()

const router = useRouter()

const username = ref('')
const email = ref('')
const password = ref('')

const handleRegister = () => {
  authStore.register(username.value, email.value, password.value)
  alert("Ro'yxatdan o'tish muvaffaqiyatli! Kirish sahifasiga o'ting.")
  username.value = ''
  email.value = ''
  password.value = ''
  router.push('/login')
}
</script> -->

<template>
  <div class="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded">
    <h2 class="text-2xl font-bold mb-6 text-center text-[#1C4D9C]">Ro'yxatdan o'tish</h2>
    <form @submit.prevent="handleRegister">
      <!-- Username -->
      <input
        v-model="username"
        type="text"
        placeholder="Username"
        class="border p-2 w-full mb-4 rounded"
      />

      <!-- Email -->
      <input
        v-model="email"
        type="email"
        placeholder="Email"
        class="border p-2 w-full mb-4 rounded"
      />

      <!-- Password -->
      <input
        v-model="password"
        type="password"
        placeholder="Password"
        class="border p-2 w-full mb-4 rounded"
      />

      <!-- Submit Button -->
      <button
        type="submit"
        class="w-full bg-[#1C4D9C] text-white py-2 rounded"
        :disabled="authStore.loading"
      >
        <span v-if="authStore.loading">Yuklanmoqda...</span>
        <span v-else>Ro'yxatdan o'tish</span>
      </button>
    </form>

    <!-- Error Message -->
    <p v-if="authStore.error" class="text-red-500 text-center mt-4">
      {{ authStore.error }}
    </p>

    <!-- Navigate to Login -->
    <p class="text-center mt-4">
      Hisobingiz bormi?
      <router-link to="/login" class="text-[#EE6027]">Kirish</router-link>
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore } from '../../stores/authStore'
import { _RouterLinkI, useRouter } from 'vue-router'

const authStore = useAuthStore()

const username = ref('')
const email = ref('')
const password = ref('')
const router = useRouter()

const handleRegister = () => {
  authStore.register(username.value, email.value, password.value)
  username.value = ''
  email.value = ''
  password.value = ''
  router.push('/login')
}
</script>
