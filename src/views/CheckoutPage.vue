<template>
  <div class="checkout-page bg-gray-100 min-h-screen py-16 checkout">
    <div class="container mx-auto px-6">
      <!-- Sarlavha -->
      <h1 class="text-4xl font-bold text-center text-[#1C4D9C] mb-12">To'lov jarayoni</h1>

      <!-- Checkout bo'limlari -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- 1-bo'lim: Mahsulotlar ro'yxati -->
        <div class="lg:col-span-2 bg-white shadow-md rounded-lg p-6">
          <h2 class="text-2xl font-semibold text-[#1C4D9C] mb-6">Savatchangiz</h2>
          <div
            v-for="item in cartItems"
            :key="item.id"
            class="flex items-center justify-between mb-4"
          >
            <!-- Mahsulot rasmi -->
            <img :src="item.image" :alt="item.title" class="w-20 h-20 object-cover rounded-lg" />
            <!-- Mahsulot ma'lumotlari -->
            <div class="flex-1 ml-4">
              <h3 class="text-lg font-semibold">{{ item.title }}</h3>
              <p class="text-gray-500">Narx: ${{ item.price }}</p>
              <p class="text-gray-500">Soni: {{ item.quantity }}</p>
            </div>
            <!-- Mahsulotni o'chirish -->
            <button
              @click="removeFromCart(item.id)"
              class="text-red-500 hover:text-red-700 transition"
            >
              O'chirish
            </button>
          </div>
        </div>

        <!-- 2-bo'lim: To'lov ma'lumotlari -->
        <div class="bg-white shadow-md rounded-lg p-6">
          <h2 class="text-2xl font-semibold text-[#1C4D9C] mb-6">To'lov ma'lumotlari</h2>
          <form @submit.prevent="handleCheckout">
            <!-- Ism va Email -->
            <input
              type="text"
              v-model="formData.name"
              placeholder="Ismingiz"
              required
              class="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#1C4D9C] transition"
            />
            <input
              type="email"
              v-model="formData.email"
              placeholder="Email"
              required
              class="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#1C4D9C] transition"
            />

            <!-- Kredit karta ma'lumotlari -->
            <input
              type="text"
              v-model="formData.cardNumber"
              placeholder="Karta raqami"
              required
              class="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#1C4D9C] transition"
            />
            <div class="flex space-x-4">
              <input
                type="text"
                v-model="formData.expiryDate"
                placeholder="Muddati (MM/YY)"
                required
                class="w-1/2 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#1C4D9C] transition"
              />
              <input
                type="text"
                v-model="formData.cvc"
                placeholder="CVC"
                required
                class="w-1/2 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#1C4D9C] transition"
              />
            </div>

            <!-- Umumiy narx va to'lov tugmasi -->
            <div class="mt-6">
              <p class="text-lg font-bold text-right mb-4">Umumiy narx: ${{ totalPrice }}</p>
              <button
                type="submit"
                class="w-full bg-[#1C4D9C] text-white py-3 rounded hover:bg-[#164b89] transition"
              >
                To'lovni amalga oshirish
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useCartStore } from '@/stores/cartStore'
import { useToast } from 'vue-toastification'

// Savatcha ma'lumotlari
const cartStore = useCartStore()
const cartItems = ref(cartStore.items)
const totalPrice = ref(cartStore.totalPrice)
const toast = useToast()

// Savatchani local storage bilan sinxronlashtirish
watch(
  () => cartStore.items,
  (newItems) => {
    localStorage.setItem('cartItems', JSON.stringify(newItems))
    cartItems.value = newItems
  },
  { deep: true },
)

// Local storage'dan savatcha ma'lumotlarini yuklash
const loadCartFromLocalStorage = () => {
  const storedCart = localStorage.getItem('cartItems')
  if (storedCart) {
    cartStore.items = JSON.parse(storedCart)
  }
}

loadCartFromLocalStorage()

// Form ma'lumotlari uchun reaktiv o'zgaruvchilar
const formData = ref({
  name: '',
  email: '',
  cardNumber: '',
  expiryDate: '',
  cvc: '',
})

// Checkout funksiyasi
const handleCheckout = () => {
  toast.success(`Xaridingiz muvaffaqiyatli amalga oshirildi! Rahmat, ${formData.value.name}.`)

  formData.value.name = ''
  formData.value.email = ''
  formData.value.cardNumber = ''
  formData.value.expiryDate = ''
  formData.value.cvc = ''
  cartStore.clearCart() // Savatchani tozalash
  localStorage.removeItem('cartItems') // Local storage'ni tozalash
}

// Savatchadan mahsulotni o'chirish funksiyasi
const removeFromCart = (productId: number) => {
  cartStore.removeFromCart(productId)
}
</script>

<style scoped>
/* Mobil uchun responsiv sozlamalar */
@media (max-width: 768px) {
  .grid {
    grid-template-columns: 1fr !important;
  }
}

.checkout {
  padding-top: 200px;
}
</style>
