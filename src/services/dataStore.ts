// dataStore.ts
import { defineStore } from 'pinia'
import { fetchProducts, fetchCategories } from '@/services/api'
import type { ProductCardTypes } from '@/types/userTypes'

export const useDataStore = defineStore('dataStore', {
  state: () => ({
    products: [] as ProductCardTypes[],
    categories: [] as string[],
    loading: false,
  }),
  actions: {
    async loadData() {
      if (this.products.length === 0) {
        this.loading = true
        try {
          this.products = await fetchProducts()
          this.categories = await fetchCategories()
        } catch (error) {
          console.error('API so‘rovda xatolik:', error)
        } finally {
          this.loading = false
        }
      }
    },
  },
})
