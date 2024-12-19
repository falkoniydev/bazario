// Product data fetching
import axios from 'axios'

const API_URL = 'https://fakestoreapi.com'

export const fetchProducts = async () => {
  try {
    const response = await axios.get(`${API_URL}/products`)
    console.log(response.data)
    return response.data
  } catch (error) {
    console.error('Error fetching products:', error)
    return []
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
