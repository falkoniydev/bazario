<template>
  <div class="container mx-auto p-6 bg-white shadow-lg rounded settings">
    <h2 class="text-2xl font-bold mb-6 text-center text-[#1C4D9C]">Sozlamalar</h2>
    <form @submit.prevent="saveChanges">
      <input
        v-model="user.username"
        placeholder="Username"
        class="border p-2 w-full mb-4 rounded"
      />
      <input v-model="user.email" placeholder="Email" class="border p-2 w-full mb-4 rounded" />
      <input v-model="user.image" placeholder="Image URL" class="border p-2 w-full mb-4 rounded" />
      <button type="submit" class="w-full bg-[#1C4D9C] text-white py-2 rounded">Saqlash</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import type { User } from '@/types/userTypes'
import { ref, onMounted } from 'vue'

const user = ref<User>({})

onMounted(() => {
  user.value = JSON.parse(localStorage.getItem('registeredUsers') || '{}')
})

const saveChanges = () => {
  localStorage.setItem('userData', JSON.stringify(user.value))
  alert("Ma'lumotlar saqlandi!")
}
</script>

<style scoped>
.settings {
  padding: 28px;
  margin: 200px auto;
  max-width: 600px !important;
  width: 100%;
}

/* @media screen and (max-width: 400px) {
  .settings {
    margin: 100px 28px 50px 28px !important;
  }
} */
</style>
