<template>
  <div
    class="hero-section relative bg-gradient-to-r from-[#1C4D9C] to-[#EE6027] text-white h-screen flex items-center justify-center"
  >
    <div class="text-center">
      <h1 class="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-down">Bazario</h1>
      <p class="text-lg md:text-2xl mb-8 animate-fade-in-up">Onlayn xaridning eng oson yo‘li!</p>
      <div class="flex justify-center space-x-4">
        <router-link
          to="/products"
          class="px-8 py-3 bg-white text-[#1C4D9C] rounded-lg font-semibold shadow-md hover:bg-[#F0F0F0] transition transform hover:scale-105"
        >
          Mahsulotlarni Ko‘rish
        </router-link>
        <router-link
          to="/contacts"
          class="px-8 py-3 border border-white rounded-lg font-semibold hover:bg-white hover:text-[#1C4D9C] transition transform hover:scale-105"
        >
          Biz bilan Bog‘laning
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Animatsiyalar */
@keyframes fade-in-down {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-down {
  animation: fade-in-down 1s ease-out;
}

.animate-fade-in-up {
  animation: fade-in-up 1s ease-out;
}
</style>
