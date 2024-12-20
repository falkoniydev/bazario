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

    <!-- <button @click="clearStorage" class="border border-spacing-1 bg-red-400">
      Clear Local Storage
    </button>
    <button @click="logout" class="border border-spacing-1 bg-red-400">Log out</button> -->
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../../stores/authStore'

const authStore = useAuthStore()
const router = useRouter()

const username = ref('')
const password = ref('')

const handleLogin = async () => {
  await authStore.login(username.value, password.value)
  if (!authStore.error) router.push('/')
}

const clearStorage = () => {
  authStore.deleteInfo()
}

const logout = () => {
  authStore.logout()
  router.push('/')
}
</script>

<style scoped>
body {
  background-color: #bf1010 !important;
}
</style>
