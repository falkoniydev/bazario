// Foydalanuvchi uchun aniq interface yaratamiz
export interface RegisteredUser {
  username: string
  email: string
  password: string
  apiUser: { username: string; password: string } // Fake API user ma'lumoti
}

export interface User {
  username?: string
  email?: string
  password?: string
  image?: string
}

export interface ProductCardTypes {
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

export interface HomeProductCardTypes {
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

export interface Product {
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
