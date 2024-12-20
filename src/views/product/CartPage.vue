<template>
  <div class="container mx-auto p-6 cart">
    <h1 class="text-3xl font-bold mb-8 text-center text-[#1C4D9C]">Savatcha</h1>

    <div v-if="cartItems.length === 0" class="text-center text-gray-500">
      <p>Savatchangiz bo'sh!</p>
    </div>

    <div v-else>
      <!-- Savatcha Mahsulotlari -->
      <div class="grid grid-cols-1 gap-6">
        <div
          v-for="item in cartItems"
          :key="item.id"
          class="flex items-center justify-between bg-white p-4 shadow-md rounded-lg"
        >
          <!-- Mahsulot rasmi -->
          <img :src="item.image" :alt="item.title" class="w-20 h-20 object-cover rounded" />

          <!-- Mahsulot ma'lumotlari -->
          <div class="flex-1 ml-4">
            <h3 class="text-lg font-bold text-[#1C4D9C]">{{ item.title }}</h3>
            <p class="text-gray-500">${{ item.price }}</p>
          </div>

          <!-- Mahsulot miqdori -->
          <input
            type="number"
            v-model.number="item.quantity"
            @change="updateQuantity(item.id, item.quantity)"
            class="w-16 text-center border border-gray-300 rounded"
          />

          <!-- Mahsulotni o'chirish -->
          <button @click="removeFromCart(item.id)" class="text-red-500 hover:text-red-700 ml-3">
            <XMarkIcon class="w-[30px] h-[30px]" />
          </button>
        </div>
      </div>

      <!-- Umumiy Narx -->
      <div class="mt-8 text-right">
        <p class="text-lg font-bold">Umumiy narx: ${{ totalPrice }}</p>
        <RouterLink
          to="/user/checkout"
          class="bg-[#1C4D9C] text-white px-6 py-2 rounded-lg shadow-md hover:bg-[#164b89] transition"
        >
          Buyurtma berish
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from '@/stores/cartStore'
import { XMarkIcon } from '@heroicons/vue/24/outline'
import { computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useToast } from 'vue-toastification'

onMounted(() => {
  const savedItems = JSON.parse(localStorage.getItem('cartItems') || '[]')
  cartStore.items = savedItems
})

const cartStore = useCartStore()
const cartItems = computed(() => cartStore.items) // <-- Reaktiv o'zgaruvchi
const totalPrice = computed(() => cartStore.totalPrice) // <-- Reaktiv o'zgaruvchi
const toast = useToast()
const router = useRouter()

const removeFromCart = (productId: number) => {
  cartStore.removeFromCart(productId)
  localStorage.setItem('cartItems', JSON.stringify(cartStore.items)) // <-- Local Storagega saqlash
  toast.error("Mahsulot o'chirildi!")
}

const updateQuantity = (productId: number, quantity: number) => {
  cartStore.updateQuantity(productId, quantity)
  localStorage.setItem('cartItems', JSON.stringify(cartStore.items)) // <-- Local Storagega saqlash
}
</script>

<style scoped>
.cart {
  padding-top: 150px;
}
</style>
