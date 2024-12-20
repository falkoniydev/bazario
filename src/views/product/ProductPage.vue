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

    <!-- Loading Spinner -->
    <div v-if="loading" class="flex justify-center items-center h-64">
      <svg
        class="animate-spin -ml-1 mr-3 h-10 w-10 text-[#1C4D9C]"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          class="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
        ></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8h8a8 8 0 01-8 8z"></path>
      </svg>
    </div>

    <!-- Mahsulotlar Ro‘yxati -->
    <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      <ProductCard v-for="product in filteredProducts" :key="product.id" :product="product" />
    </div>

    <!-- Natija Topilmasa -->
    <div v-if="!loading && filteredProducts.length === 0" class="text-center text-gray-500">
      <p>Hech qanday mahsulot topilmadi!</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import ProductCard from '@/components/ProductCard.vue'
import { ChevronDownIcon } from '@heroicons/vue/24/solid'
import { useDataStore } from '@/services/dataStore'

// Mahsulotlar va yuklanish holati uchun o'zgaruvchilar
const dataStore = useDataStore()
const products = computed(() => dataStore.products) // Data store'dan mahsulotlar
const loading = computed(() => dataStore.loading) // Yuklanish holati
const categories = computed(() => dataStore.categories) // Kategoriyalarni store'dan olish

// Tanlangan kategoriya va qidiruv
const selectedCategory = ref<string | null>(null)
const searchQuery = ref('')

// Dropdown ochiq/yopiq holati
const dropdownOpen = ref(false)

// Dropdownni boshqarish funksiyasi
const toggleDropdown = () => {
  dropdownOpen.value = !dropdownOpen.value
}

const selectCategory = (category: string | null) => {
  selectedCategory.value = category
  dropdownOpen.value = false
}

// Filterlangan mahsulotlarni hisoblash
const filteredProducts = computed(() => {
  return products.value.filter((product) => {
    const matchesCategory =
      selectedCategory.value === null || product.category === selectedCategory.value
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.value.toLowerCase())
    return matchesCategory && matchesSearch
  })
})

// Ma'lumotlarni bir marta yuklash
if (!dataStore.products.length) {
  dataStore.loadData()
}
</script>

<style scoped>
.products {
  padding-top: 150px;
}
</style>
