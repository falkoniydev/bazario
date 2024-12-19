<template>
  <!-- Navbar -->
  <header class="bg-white shadow-md fixed w-full z-50">
    <nav class="container mx-auto flex justify-between items-center py-4 px-6">
      <!-- Logo -->
      <router-link to="/" class="text-2xl font-bold text-[#1C4D9C]">BAZARIO</router-link>

      <!-- NavLinks - Desktop -->
      <ul class="hidden md:flex space-x-8 font-medium text-[#1C4D9C]">
        <li>
          <router-link to="/" class="nav-link" :class="{ active: currentRoute === '/' }">
            {{ $t('navbar.home') }}
          </router-link>
        </li>
        <li>
          <router-link
            to="/products"
            class="nav-link"
            :class="{ active: currentRoute === '/products' }"
          >
            {{ $t('navbar.products') }}
          </router-link>
        </li>
        <li>
          <router-link
            to="/contacts"
            class="nav-link"
            :class="{ active: currentRoute === '/contacts' }"
          >
            {{ $t('navbar.contact') }}
          </router-link>
        </li>
      </ul>

      <section class="flex items-center gap-4">
        <!-- Korzin -->
        <router-link to="/user/cart" class="relative">
          <!-- Savatcha ikonkasi -->
          <ShoppingCartIcon class="w-10 h-10" />

          <!-- Mahsulotlar soni -->
          <span
            v-if="totalItems > 0"
            class="absolute top-0 right-0 inline-block w-5 h-5 bg-[#EE6027] text-white text-xs font-bold text-center rounded-full"
          >
            {{ totalItems }}
          </span>
        </router-link>

        <!-- Tilni o'zgartirish -->
        <div class="relative inline-block text-left">
          <!-- Tanlangan til tugmasi -->
          <button
            @click="toggleDropdown"
            class="flex items-center justify-center gap-2 bg-orange-300 text-black px-2 py-1 rounded-lg shadow-md hover:bg-[#164b89] hover:text-white transition duration-300"
          >
            <span>{{ currentLocale === 'uz' ? '🇺🇿' : 'en' }}</span>
            <ChevronDownIcon
              class="w-5 h-5 transition-transform duration-300"
              :class="{ 'rotate-180': isOpen }"
            />
          </button>

          <!-- Dropdown menyu -->
          <div
            v-if="isOpen"
            class="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-50 transition-transform duration-300"
          >
            <ul class="py-1 text-gray-700">
              <li>
                <button
                  @click="setLanguage('uz')"
                  class="flex items-center gap-2 w-full px-4 py-2 hover:bg-gray-100"
                >
                  <span><img src="/uz.png" width="20" height="20" alt="uz" /></span> O‘zbek
                </button>
              </li>
              <li>
                <button
                  @click="setLanguage('en')"
                  class="flex items-center gap-2 w-full px-4 py-2 hover:bg-gray-100"
                >
                  <span><img src="/uk.png" width="20" height="20" alt="uk" /></span> English
                </button>
              </li>
            </ul>
          </div>
        </div>

        <!-- Profile Dropdown -->
        <div class="relative" v-if="isLoggedIn">
          <button @click="toogleProfile" class="focus:outline-none">
            <img
              v-if="user.image"
              :src="user.image"
              alt="Profile"
              class="w-10 h-10 rounded-full object-cover"
            />
            <UserCircleIcon v-else class="w-10 h-10 text-[#1C4D9C]" />
          </button>
          <div
            v-if="isProfileOpen"
            class="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg"
          >
            <ul class="py-2">
              <li>
                <router-link to="/user/profile" class="block px-4 py-2 hover:bg-gray-100">
                  Profile
                </router-link>
              </li>
              <li>
                <router-link to="/user/settings" class="block px-4 py-2 hover:bg-gray-100">
                  Settings
                </router-link>
              </li>
              <li>
                <button @click="logout" class="block w-full text-left px-4 py-2 hover:bg-gray-100">
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
        <!-- Login/Signup Modal -->
        <div
          v-if="!isLoggedIn"
          class="flex items-center justify-center gap-2 text-[#164b89] transition-all font-bold"
        >
          <RouterLink to="/auth/login" class="hover:text-orange-500">Login</RouterLink>
          <RouterLink to="/auth/register" class="hover:text-orange-500">Sign Up</RouterLink>
        </div>
      </section>

      <!-- Burger Menu - Mobile -->
      <button @click="toggleMenu" class="md:hidden focus:outline-none text-[#1C4D9C]">
        <Bars3Icon v-if="!isMenuOpen" class="w-8 h-8 transition-transform duration-300" />
        <XMarkIcon v-else class="w-8 h-8 transition-transform duration-300" />
      </button>
    </nav>

    <!-- Drawer Menu - Mobile -->
    <div
      class="fixed top-[65px] right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40"
      :class="{ 'translate-x-0': isMenuOpen, 'translate-x-full': !isMenuOpen }"
    >
      <ul class="flex flex-col space-y-6 p-6 text-lg font-medium text-[#1C4D9C]">
        <li>
          <router-link
            to="/"
            class="nav-link"
            :class="{ active: currentRoute === '/' }"
            @click="closeMenu"
          >
            Asosiy
          </router-link>
        </li>
        <li>
          <router-link
            to="/products"
            class="nav-link"
            :class="{ active: currentRoute === '/products' }"
            @click="closeMenu"
          >
            Mahsulotlar
          </router-link>
        </li>
        <li>
          <router-link
            to="/contacts"
            class="nav-link"
            :class="{ active: currentRoute === '/contacts' }"
            @click="closeMenu"
          >
            Bog'lanish
          </router-link>
        </li>
      </ul>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { RouterLink, useRoute, useRouter } from 'vue-router'
import { Bars3Icon, ShoppingCartIcon, XMarkIcon } from '@heroicons/vue/24/outline'
import { ChevronDownIcon, UserCircleIcon } from '@heroicons/vue/24/solid'
import { useI18n } from 'vue-i18n'
import type { User } from '@/types/userTypes'
import { useCartStore } from '@/stores/cartStore'

const isMenuOpen = ref(false)
const isProfileOpen = ref(false)
const route = useRoute()
const dropdownOpen = ref(false)
const isLoggedIn = ref(false)
const router = useRouter()
const user = ref<User>({
  username: '',
  email: '',
  image: '',
})

// User ma'lumotlarini olish
onMounted(() => {
  const token = localStorage.getItem('authToken')
  const storedUser = JSON.parse(localStorage.getItem('registeredUsers') || '{}')
  if (token) {
    isLoggedIn.value = true
    user.value = storedUser
  }
})

const toogleProfile = () => {
  isProfileOpen.value = !isProfileOpen.value
}

// Logout funksiyasi
const logout = () => {
  localStorage.removeItem('authToken')
  localStorage.removeItem('userData')
  isLoggedIn.value = false
  router.push('/auth/login')
}

// Tilni o'zgartirish
const { locale } = useI18n()
const isOpen = ref(false)
const currentLocale = ref(locale.value)
const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

const setLanguage = (lang: string) => {
  locale.value = lang
  currentLocale.value = lang
  localStorage.setItem('user-lang', lang)
  isOpen.value = false
}

// Burger Menu Toggle

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

const currentRoute = computed(() => route.path)

// Pinia Store bilan reaktiv bog'lanish
const cartStore = useCartStore()
const totalItems = computed(() => cartStore.totalItems)
</script>

<style scoped>
/* Navbar Link Style */
.nav-link {
  position: relative;
  padding-bottom: 4px;
  transition: color 0.3s;
  font-weight: bold;
}

.nav-link::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: 0;
  left: 50%;
  background-color: #ee6027;
  transition: all 0.3s ease;
  transform: translateX(-50%);
}

.nav-link:hover::after {
  width: 100%;
}

.nav-link:hover {
  color: #ee6027;
}

.active {
  color: #ee6027;
  font-weight: bold;
}

/* Animatsiya uchun */
.rotate-180 {
  transform: rotate(180deg);
}
</style>
