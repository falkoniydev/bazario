<script lang="ts" setup>
import { fetchProducts } from '@/services/api'
import type { ProductCardTypes } from '@/types/userTypes'
import { ChevronDownIcon } from '@heroicons/vue/24/outline'
import { ref, onMounted, computed } from 'vue'
// Mahsulotlar va kategoriyalar uchun o‘zgaruvchilar
const categories = ref<string[]>([])
const selectedCategory = ref<string | null>(null)
const dropdownOpen = ref(false)

// Mahsulotlar va kategoriyalar uchun o‘zgaruvchilar
const products = ref<ProductCardTypes[]>([])

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
  })
})
</script>

<template>
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
        <li
          v-for="category in categories"
          :key="category"
          @click="selectCategory(category)"
          class="px-4 py-2 hover:bg-gray-100 cursor-pointer"
        >
          {{ category }}
        </li>
        <li @click="selectCategory(null)" class="px-4 py-2 hover:bg-gray-100 cursor-pointer">
          Barcha Kategoriyalar
        </li>
      </ul>
    </div>
  </div>
</template>
