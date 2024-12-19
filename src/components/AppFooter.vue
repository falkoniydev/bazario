<template>
  <footer class="bg-[#1C4D9C] text-white py-12">
    <div class="container mx-auto px-6">
      <!-- Footerning asosiy qismlari -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Bo'lim 1: Logotip va qisqacha ma'lumot -->
        <div>
          <h2 class="text-2xl font-bold mb-4">Bazario</h2>
          <p class="text-gray-300">
            Online bozoringiz uchun mukammal manzil. Eng yaxshi mahsulotlarni bu yerda topasiz!
          </p>
        </div>

        <!-- Bo'lim 2: Tezkor havolalar -->
        <div>
          <h3 class="text-lg font-semibold mb-4">Tezkor havolalar</h3>
          <ul class="space-y-2">
            <li><router-link to="/" class="hover:text-[#EE6027]">Asosiy</router-link></li>
            <li>
              <router-link to="/products" class="hover:text-[#EE6027]">Mahsulotlar</router-link>
            </li>
            <li>
              <router-link to="/about" class="hover:text-[#EE6027]">Biz haqimizda</router-link>
            </li>
            <li>
              <router-link to="/contacts" class="hover:text-[#EE6027]">Bog'lanish</router-link>
            </li>
          </ul>
        </div>

        <!-- Bo'lim 3: Aloqa -->
        <div>
          <h3 class="text-lg font-semibold mb-4">Aloqa</h3>
          <ul class="space-y-2">
            <li class="flex items-center space-x-2">
              <i class="fas fa-phone-alt"></i>
              <span>+998 90 123 45 67</span>
            </li>
            <li class="flex items-center space-x-2">
              <i class="fas fa-envelope"></i>
              <span>info@bazario.uz</span>
            </li>
            <li class="flex items-center space-x-2">
              <i class="fas fa-map-marker-alt"></i>
              <span>Toshkent shahri, Amir Temur ko'chasi, 123</span>
            </li>
          </ul>
        </div>

        <!-- Bo'lim 4: Ijtimoiy tarmoqlar -->
        <div>
          <h3 class="text-lg font-semibold mb-4">Ijtimoiy tarmoqlar</h3>
          <div class="flex space-x-4">
            <a href="#" class="text-white hover:text-[#EE6027] transition">
              <i class="fab fa-facebook-f text-2xl"></i>
            </a>
            <a href="#" class="text-white hover:text-[#EE6027] transition">
              <i class="fab fa-instagram text-2xl"></i>
            </a>
            <a href="#" class="text-white hover:text-[#EE6027] transition">
              <i class="fab fa-twitter text-2xl"></i>
            </a>
            <a href="#" class="text-white hover:text-[#EE6027] transition">
              <i class="fab fa-linkedin-in text-2xl"></i>
            </a>
          </div>
        </div>
      </div>

      <!-- Quyidagi yozuv -->
      <div class="mt-8 border-t border-gray-700 pt-6 text-center text-gray-400">
        <p>&copy; 2024 Bazario. Barcha huquqlar himoyalangan.</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
/* Har qanday maxsus JavaScript kerak bo'lsa, bu yerda qo'shishingiz mumkin. */
</script>

<style scoped>
/* Mobil uchun responsiv sozlamalar */
@media (max-width: 768px) {
  footer {
    text-align: center;
  }
}
</style>
