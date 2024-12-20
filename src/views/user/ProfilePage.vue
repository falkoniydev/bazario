<template>
  <div class="container mx-auto p-6 bg-white shadow-lg rounded profile pt-[28px] mt-[150px]">
    <h2 class="text-2xl font-bold mb-6 text-center text-[#1C4D9C]">Profil Ma'lumotlari</h2>
    <div class="text-center mb-4">
      <img
        v-if="user.image"
        :src="user.image"
        alt="Profile"
        class="w-24 h-24 mx-auto rounded-full object-cover"
      />
      <UserCircleIcon v-else class="w-24 h-24 text-gray-400 mx-auto" />
    </div>
    <p><strong>Username:</strong> {{ user?.username }}</p>
    <p><strong>Email:</strong> {{ user?.email }}</p>
    <p><strong>Password:</strong> {{ user?.password }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { UserCircleIcon } from '@heroicons/vue/24/solid'
import type { User } from '@/types/userTypes'

const user = ref<User>({
  username: '',
  email: '',
  image: '',
})

onMounted(() => {
  user.value = JSON.parse(localStorage.getItem('registeredUsers') || '{}')
  console.log(user)
})
</script>

<style scoped>
.profile {
  padding-top: 200px !important;
}
</style>
