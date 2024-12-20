import { defineStore } from 'pinia'
import type { ProductCardTypes } from '@/types/userTypes'

interface CartItem extends ProductCardTypes {
  quantity: number
}

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: JSON.parse(localStorage.getItem('cartItems') || '[]') as CartItem[],
  }),
  getters: {
    totalPrice: (state) => {
      return state.items.reduce((total, item) => total + item.price * item.quantity, 0)
    },
    totalItems: (state) => {
      return state.items.reduce((total, item) => total + item.quantity, 0)
    },
  },
  actions: {
    addToCart(product: ProductCardTypes) {
      const existingItem = this.items.find((item) => item.id === product.id)
      if (existingItem) {
        existingItem.quantity++
      } else {
        this.items.push({ ...product, quantity: 1 })
      }
      localStorage.setItem('cartItems', JSON.stringify(this.items)) // Saqlash
    },

    // State yuklanayotgan paytda Local Storage'dan ma'lumotni qayta o'qish
    state: () => ({
      items: JSON.parse(localStorage.getItem('cartItems') || '[]') as CartItem[],
    }),

    removeFromCart(productId: number) {
      console.log('O‘chirishdan oldin:', this.items)
      this.items = this.items.filter((item) => item.id !== productId)
      localStorage.setItem('cartItems', JSON.stringify(this.items)) // Saqlash
      console.log('O‘chirishdan keyin:', this.items)
    },
    updateQuantity(productId: number, quantity: number) {
      const item = this.items.find((item) => item.id === productId)
      if (item && quantity > 0) {
        console.log('Yangilanayotgan mahsulot:', item)
        item.quantity = quantity
      }
    },
    clearCart() {
      this.items = []
      localStorage.setItem('cartItems', JSON.stringify(this.items)) // Local Storage'ni ham tozalash
    },
  },
})
