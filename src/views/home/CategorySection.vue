<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'

import type { HomeProductCardTypes } from '@/types/userTypes'

// Reaktiv o'zgaruvchilar
const products = ref<HomeProductCardTypes[]>([])
const categories = ref<string[]>([])
const loadingCategories = ref(true)

// Mahsulotlarni yuklash
const fetchProducts = async () => {
  try {
    const response = await axios.get<HomeProductCardTypes[]>('https://fakestoreapi.com/products')
    products.value = response.data

    // Unikal kategoriyalarni aniqlash
    const allCategories = products.value.map((product) => product.category)
    categories.value = Array.from(new Set(allCategories)) // Takrorlanmas kategoriyalar
  } catch (error) {
    console.error('Mahsulotlarni yuklashda xatolik:', error)
  } finally {
    loadingCategories.value = false
  }
}

// Sahifa yuklanganda API chaqiruvini amalga oshirish
onMounted(fetchProducts)
</script>

<template>
  <div class="categories-section py-16 bg-gray-100">
    <h2 class="text-4xl font-bold text-center mb-12 text-[#1C4D9C]">Mashhur Kategoriyalar</h2>

    <div v-if="loadingCategories" class="text-center">Yuklanmoqda...</div>

    <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      <div
        v-for="category in categories"
        :key="category"
        class="category-card group bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105"
      >
        <!-- Kategoriya nomi -->
        <div class="p-4 text-center">
          <h3 class="text-xl font-semibold text-[#1C4D9C] group-hover:text-[#EE6027] transition">
            {{ category }}
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>
