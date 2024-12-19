import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import { useAuthStore } from '@/stores/authStore'

// Layoutlar
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import AuthLayout from '@/layouts/AuthLayout.vue'

// Public (ochiq) sahifalar
import HomePage from '@/views/home/HomePage.vue'
import ProductPage from '@/views/product/ProductPage.vue'
import ProductDetails from '@/views/product/ProductDetails.vue'
import LoginPage from '@/views/auth/LoginPage.vue'
import RegisterPage from '@/views/auth/RegisterPage.vue'

// Private (himoyalangan) sahifalar
import CartPage from '@/views/product/CartPage.vue'
import CheckoutPage from '@/views/product/CheckoutPage.vue'
import ProfilePage from '@/views/user/ProfilePage.vue'
import ForgotPasswordPage from '@/views/auth/ForgotPasswordPage.vue'
import ContactPage from '@/views/ContactPage.vue'
import SettingsPage from '@/views/user/SettingsPage.vue'
import AboutPage from '@/views/AboutPage.vue'

const routes: Array<RouteRecordRaw> = [
  // Ochiq sahifalar
  {
    path: '/',
    component: DefaultLayout,
    children: [
      { path: '', name: 'Home', component: HomePage },
      { path: 'about', name: 'About', component: AboutPage },
      { path: 'products', name: 'Products', component: ProductPage },
      { path: 'contacts', name: 'Contacts', component: ContactPage },
      { path: 'products/:id', name: 'ProductDetails', component: ProductDetails, props: true },
    ],
  },
  // Auth sahifalari
  {
    path: '/auth',
    component: AuthLayout,
    children: [
      { path: 'login', name: 'Login', component: LoginPage },
      { path: 'register', name: 'Register', component: RegisterPage },
      { path: 'forgot-password', name: 'Forgot-Password', component: ForgotPasswordPage },
    ],
  },
  // Himoyalangan sahifalar
  {
    path: '/user',
    component: DefaultLayout,
    meta: { requiresAuth: true }, // Himoyalangan
    children: [
      { path: 'cart', name: 'Cart', component: CartPage },
      { path: 'checkout', name: 'Checkout', component: CheckoutPage },
      { path: 'profile', name: 'Profile', component: ProfilePage },
      { path: 'settings', name: 'Settings', component: SettingsPage },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// Router Guard
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()
  const isAuthenticated = !!authStore.token || !!localStorage.getItem('authToken')

  if (to.meta.requiresAuth && !isAuthenticated) {
    next({ name: 'Login' }) // Login sahifasiga yo‘naltirish
  } else {
    next()
  }
})

export default router
