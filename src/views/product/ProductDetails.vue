<template>
  <div class="container mx-auto p-6 product-details">
    <!-- Mahsulot Tafsilotlari -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <!-- Mahsulot rasmi -->
      <img
        :src="product?.image"
        :alt="product?.title"
        class="w-[500px] h-[500px] rounded-lg shadow-md"
      />

      <!-- Mahsulot Ma'lumotlari -->
      <div>
        <h1 class="text-3xl font-bold text-[#1C4D9C] mb-4">{{ product?.title }}</h1>
        <p class="text-gray-500 mb-4">Kategoriyasi: {{ product?.category }}</p>
        <p class="text-gray-700 text-lg font-semibold mb-4">${{ product?.price }}</p>
        <p class="text-gray-600 mb-4">{{ product?.description }}</p>

        <!-- Reyting -->
        <div class="flex items-center mb-4">
          <span class="text-yellow-500 text-xl mr-2">⭐</span>
          <span>{{ product?.rating.rate }}</span>
          <span class="text-gray-500 ml-2">({{ product?.rating.count }} sharh)</span>
        </div>

        <!-- Add to Cart -->
        <button
          @click="addToCart"
          class="bg-[#1C4D9C] text-white px-6 py-2 rounded-lg shadow-md hover:bg-[#164b89] transition"
        >
          Savatchaga qo'shish
        </button>
        <button
          @click="goToCart"
          class="bg-[#1C4D9C] text-white px-6 py-2 rounded-lg shadow-md hover:bg-[#164b89] transition ml-5"
        >
          Savatchaga o'tish
        </button>

        <ArrowLeftCircleIcon @click="backToProducts" class="w-[50px] cursor-pointer mt-5" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { fetchProducts } from '@/services/api'
import type { ProductCardTypes } from '@/types/userTypes'
import { useCartStore } from '@/stores/cartStore'
import { useToast } from 'vue-toastification'
import { ArrowLeftCircleIcon } from '@heroicons/vue/24/outline'

// Mahsulot ma'lumotlari uchun
const route = useRoute()
const router = useRouter()
const productId = route.params.id
const product = ref<ProductCardTypes | undefined>(undefined)
const toast = useToast()

// API orqali mahsulotni olish
onMounted(async () => {
  const products = await fetchProducts()
  product.value = products.find((p: ProductCardTypes) => p.id === Number(productId))
})

// Savatchaga mahsulot qo'shish
const cartStore = useCartStore()

const addToCart = () => {
  if (product.value) {
    console.log('Mahsulot savatchaga qo‘shilmoqda:', product.value)
    cartStore.addToCart(product.value)
    toast.success("Mahsulot savatchaga qo'shildi")
  }
}

const goToCart = () => {
  router.push('/user/cart')
}

const backToProducts = () => {
  router.go(-1)
}
</script>

<style scoped>
.product-details {
  padding-top: 150px !important;
}
</style>
