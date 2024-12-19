<template>
  <div class="contact-page bg-gray-100 min-h-screen py-16 contacts">
    <div class="container mx-auto px-6">
      <!-- Sarlavha -->
      <h1 class="text-4xl font-bold text-center text-[#1C4D9C] mb-12">Biz bilan bog'laning</h1>

      <!-- Bog'lanish shakli va aloqa ma'lumotlari -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        <!-- Bog'lanish shakli -->
        <form @submit.prevent="handleSubmit" class="bg-white shadow-md rounded-lg p-8 space-y-6">
          <h2 class="text-2xl font-semibold text-[#1C4D9C] mb-4">Xabar yuboring</h2>
          <input
            type="text"
            v-model="formData.name"
            placeholder="Ismingiz"
            required
            class="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#1C4D9C] transition"
          />
          <input
            type="email"
            v-model="formData.email"
            placeholder="Email manzilingiz"
            required
            class="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#1C4D9C] transition"
          />
          <textarea
            v-model="formData.message"
            placeholder="Xabaringiz"
            rows="5"
            required
            class="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#1C4D9C] transition"
          ></textarea>
          <button
            type="submit"
            class="w-full bg-[#1C4D9C] text-white py-3 rounded hover:bg-[#164b89] transition"
          >
            Yuborish
          </button>
        </form>

        <!-- Aloqa ma'lumotlari -->
        <div class="bg-white shadow-md rounded-lg p-8 space-y-6">
          <h2 class="text-2xl font-semibold text-[#1C4D9C] mb-4">Aloqa ma'lumotlari</h2>
          <div class="flex items-center space-x-4">
            <i class="fas fa-phone-alt text-[#1C4D9C] text-2xl"></i>
            <span class="text-lg">+998 90 123 45 67</span>
          </div>
          <div class="flex items-center space-x-4">
            <i class="fas fa-envelope text-[#1C4D9C] text-2xl"></i>
            <span class="text-lg">info@bazario.uz</span>
          </div>
          <div class="flex items-center space-x-4">
            <i class="fas fa-map-marker-alt text-[#1C4D9C] text-2xl"></i>
            <span class="text-lg"> Toshkent shahri, Amir Temur ko'chasi, 123 </span>
          </div>
          <!-- Ijtimoiy tarmoqlar -->
          <div class="mt-6 flex space-x-4">
            <a href="#" class="text-[#1C4D9C] hover:text-[#EE6027] text-2xl transition">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#" class="text-[#1C4D9C] hover:text-[#EE6027] text-2xl transition">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="#" class="text-[#1C4D9C] hover:text-[#EE6027] text-2xl transition">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#" class="text-[#1C4D9C] hover:text-[#EE6027] text-2xl transition">
              <i class="fab fa-linkedin-in"></i>
            </a>
          </div>

          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95838.27136254567!2d69.23659467092024!3d41.3535278713042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef3533211ebbf%3A0x1fe203b553a689d2!2sAmir%20Temur%20Avenue%20123%2C%20100000%2C%20Tashkent%2C%20Uzbekistan!5e0!3m2!1sen!2sro!4v1734580173785!5m2!1sen!2sro"
              width="500"
              height="250"
              style="border: 0"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// Form ma'lumotlari uchun reaktiv o'zgaruvchi
const formData = ref({
  name: '',
  email: '',
  message: '',
})

// Xabar yuborish funksiyasi
const handleSubmit = () => {
  alert(
    `Xabar yuborildi:\nIsm: ${formData.value.name}\nEmail: ${formData.value.email}\nXabar: ${formData.value.message}`,
  )
  formData.value.name = ''
  formData.value.email = ''
  formData.value.message = ''
}
</script>

<style scoped>
/* Mobil uchun grid tuzilmasini moslashtirish */
@media (max-width: 768px) {
  .grid {
    grid-template-columns: 1fr !important;
  }
}

.contacts {
  padding-top: 150px;
}
</style>
