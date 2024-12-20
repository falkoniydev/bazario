// api.ts
import axios from 'axios'
import type { ProductCardTypes } from '@/types/userTypes'

const API_URL = 'https://fakestoreapi.com'

// Cached products uchun tipni aniqlash
let cachedProducts: ProductCardTypes[] | null = null

// Mahsulotlarni yuklash
export const fetchProducts = async (): Promise<ProductCardTypes[]> => {
  if (cachedProducts) {
    return cachedProducts
  }
  try {
    const response = await axios.get<ProductCardTypes[]>(`${API_URL}/products`)
    cachedProducts = response.data
    return cachedProducts
  } catch (error) {
    console.error('Error fetching products:', error)
    return [] // Xato yuz berganda bo'sh massiv qaytarish
  }
}

// Kategoriyalarni olish
export const fetchCategories = async () => {
  try {
    const response = await axios.get(`${API_URL}/products/categories`)
    console.log(response.data)
    return response.data
  } catch (error) {
    console.error('Error fetching categories:', error)
    return []
  }
}
