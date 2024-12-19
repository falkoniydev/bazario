<template>
  <router-link :to="`/products/${props.product.id}`">
    <div
      class="relative bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl duration-300"
    >
      <!-- Mahsulot rasmi -->
      <img
        :src="props.product.image"
        :alt="props.product.title"
        class="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
      />

      <!-- Mahsulot ma'lumotlari -->
      <div class="p-4">
        <h3 class="text-lg font-semibold truncate">{{ props.product.title }}</h3>
        <p class="text-gray-500 mt-2">${{ props.product.price }}</p>
      </div>
      <button
        @click.stop="addToCart"
        class="absolute z-10 bottom-4 left-1/2 transform -translate-x-1/2 bg-[#1C4D9C] text-white py-2 px-4 rounded-full opacity-0 transition-opacity duration-300 hover:bg-[#EE6027]"
      >
        Add to Cart
      </button>
    </div>
  </router-link>
</template>

<script setup lang="ts">
import { useCartStore } from '@/stores/cartStore'

const props = defineProps<{
  product: {
    id: number
    title: string
    price: number
    description: string
    category: string
    image: string
    rating: {
      rate: number
      count: number
    }
  }
}>()

const cartStore = useCartStore()

// Mahsulotni savatchaga qo'shish
const addToCart = () => {
  cartStore.addToCart(props.product) // props.product ni ishlatamiz
}
</script>
