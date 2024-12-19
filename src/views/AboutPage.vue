<template>
  <div class="about-page bg-gray-100 min-h-screen py-16 about">
    <div class="container mx-auto px-6">
      <!-- Sarlavha -->
      <h1 class="text-4xl font-bold text-center text-[#1C4D9C] mb-12">Biz haqimizda</h1>

      <!-- Asosiy ma'lumotlar -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Rasm -->
        <div class="relative">
          <img
            src="/shopping.jpg"
            alt="Biz haqimizda"
            class="rounded-lg shadow-md w-full object-cover"
          />
          <div
            class="absolute inset-0 bg-[#1C4D9C] opacity-20 rounded-lg hover:opacity-10 transition duration-300"
          ></div>
        </div>

        <!-- Matn -->
        <div>
          <h2 class="text-3xl font-semibold text-[#1C4D9C] mb-6">Bazario haqida qisqacha</h2>
          <p class="text-gray-600 leading-relaxed mb-4">
            Bazario – bu O'zbekistonda eng yaxshi mahsulotlarni topishingiz mumkin bo'lgan onlayn
            bozor. Bizning platformamiz har xil turdagi mahsulotlarni taklif qiladi:
            kiyim-kechaklar, elektronika, uy jihozlari va boshqa ko'plab narsalar.
          </p>
          <p class="text-gray-600 leading-relaxed">
            Biz mijozlarimizni eng yaxshi mahsulotlar va xizmatlar bilan ta'minlash uchun harakat
            qilamiz. Sizning ishonchingiz va qoniqishingiz biz uchun eng muhim omillardir.
          </p>
        </div>
      </div>

      <!-- Missiya va maqsadlar -->
      <div class="mt-16">
        <h2 class="text-3xl font-semibold text-center text-[#1C4D9C] mb-8">
          Missiya va maqsadlarimiz
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <!-- Har bir maqsad -->
          <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
            <i class="fas fa-bullseye text-[#1C4D9C] text-4xl mb-4"></i>
            <h3 class="text-xl font-bold text-[#1C4D9C] mb-2">Maqsadimiz</h3>
            <p class="text-gray-600 leading-relaxed">
              Bizning maqsadimiz – sizga qulay va ishonchli onlayn xarid qilish imkoniyatini taqdim
              etishdir.
            </p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
            <i class="fas fa-users text-[#1C4D9C] text-4xl mb-4"></i>
            <h3 class="text-xl font-bold text-[#1C4D9C] mb-2">Jamoamiz</h3>
            <p class="text-gray-600 leading-relaxed">
              Tajribali va ijodiy jamoamiz sizning ehtiyojlaringizni tushunadi va ularni amalga
              oshirishga tayyor.
            </p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
            <i class="fas fa-handshake text-[#1C4D9C] text-4xl mb-4"></i>
            <h3 class="text-xl font-bold text-[#1C4D9C] mb-2">Ishonch</h3>
            <p class="text-gray-600 leading-relaxed">
              Biz sifatli mahsulotlar va xizmatlarni taqdim etish orqali mijozlarimiz ishonchini
              qozonamiz.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
/* Har qanday maxsus JavaScript kerak bo'lsa, bu yerda qo'shishingiz mumkin. */
</script>

<style scoped>
/* Mobil uchun responsiv sozlamalar */
@media (max-width: 768px) {
  .about-page {
    text-align: center;
  }
}

.about {
  padding-top: 150px;
}
</style>
