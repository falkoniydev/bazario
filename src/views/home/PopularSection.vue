<template>
  <div class="popular-products-section py-16">
    <h2 class="text-4xl font-bold text-center mb-12 text-[#1C4D9C]">Eng Mashhur Mahsulotlar</h2>

    <div v-if="loadingProducts" class="text-center">Yuklanmoqda...</div>

    <swiper :slides-per-view="3" space-between="30" autoplay :loop="false">
      <swiper-slide
        v-for="product in popularProducts"
        :key="product.id"
        class="bg-white rounded-lg shadow-md p-4"
      >
        <img :src="product.image" :alt="product.title" class="w-full h-40 object-cover mb-4" />
        <h3 class="text-lg font-semibold text-[#1C4D9C] truncate">
          {{ product.title }}
        </h3>
        <p class="text-gray-500">${{ product.price }}</p>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper-bundle.css'
import type { HomeProductCardTypes } from '@/types/userTypes'

// Reaktiv o'zgaruvchilar
const popularProducts = ref<HomeProductCardTypes[]>([]) // Product[] turi
const loadingProducts = ref(true) // boolean turi

// Mashhur mahsulotlarni yuklash
const fetchPopularProducts = async () => {
  try {
    const response = await axios.get<HomeProductCardTypes[]>('https://fakestoreapi.com/products')
    // Faqat reyting yuqori bo'lgan mahsulotlarni olish
    popularProducts.value = response.data.filter((product) => product.rating.rate > 3)
  } catch (error) {
    console.error('Mashhur mahsulotlarni yuklashda xatolik:', error)
  } finally {
    loadingProducts.value = false
  }
}

// Sahifa yuklanganda API chaqiruvini amalga oshirish
onMounted(fetchPopularProducts)
</script>
