<template>
  <div class="container mx-auto p-6 products">
    <!-- Sahifa Sarlavhasi -->
    <h1 class="text-3xl font-bold mb-8 text-center text-[#1C4D9C]">Mahsulotlar Ro‘yxati</h1>

    <!-- Kategoriya Filter va Qidiruv -->
    <div class="flex justify-between items-center mb-8">
      <!-- Kategoriya Dropdown -->
      <div class="relative">
        <button
          @click="toggleDropdown"
          class="bg-[#1C4D9C] text-white px-4 py-2 rounded-lg shadow-md hover:bg-[#164b89] transition"
        >
          {{ selectedCategory || 'Barcha Kategoriyalar' }}
          <ChevronDownIcon class="inline w-5 h-5 ml-2" />
        </button>

        <ul
          v-if="dropdownOpen"
          class="absolute left-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg z-50"
        >
          <li @click="selectCategory(null)" class="px-4 py-2 hover:bg-gray-100 cursor-pointer">
            Barcha Kategoriyalar
          </li>
          <li
            v-for="category in categories"
            :key="category"
            @click="selectCategory(category)"
            class="px-4 py-2 hover:bg-gray-100 cursor-pointer"
          >
            {{ category }}
          </li>
        </ul>
      </div>

      <!-- Qidiruv Input -->
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Mahsulot qidirish..."
        class="w-full md:w-1/2 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-[#1C4D9C] transition"
      />
    </div>

    <!-- Mahsulotlar Ro‘yxati -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      <ProductCard v-for="product in filteredProducts" :key="product.id" :product="product" />
    </div>

    <!-- Natija Topilmasa -->
    <div v-if="filteredProducts.length === 0" class="text-center text-gray-500">
      <p>Hech qanday mahsulot topilmadi!</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { fetchProducts } from '@/services/api'
import ProductCard from '@/components/ProductCard.vue'
import { ChevronDownIcon } from '@heroicons/vue/24/solid'
import type { ProductCardTypes } from '@/types/userTypes'

// Qidiruv uchun o‘zgaruvchi
const searchQuery = ref('')

// Mahsulotlar va kategoriyalar uchun o‘zgaruvchilar
const products = ref<ProductCardTypes[]>([])
const categories = ref<string[]>([])
const selectedCategory = ref<string | null>(null)
const dropdownOpen = ref(false)

// Dropdownni boshqarish
const toggleDropdown = () => {
  dropdownOpen.value = !dropdownOpen.value
}

const selectCategory = (category: string | null) => {
  selectedCategory.value = category
  dropdownOpen.value = false
}

// API orqali ma’lumotlarni olish
onMounted(async () => {
  products.value = await fetchProducts()

  // Unikal kategoriyalarni aniqlash
  const allCategories = products.value.map((product) => product.category)
  categories.value = Array.from(new Set(allCategories)) // Takrorlanmaydigan kategoriyalar
})

// Qidiruv va kategoriya filterini hisoblash
const filteredProducts = computed(() => {
  return products.value.filter((product) => {
    const matchesCategory =
      selectedCategory.value === null || product.category === selectedCategory.value
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.value.toLowerCase())
    return matchesCategory && matchesSearch
  })
})
</script>

<style scoped>
.products {
  padding-top: 150px !important;
}
</style>
