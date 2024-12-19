<script lang="ts" setup>
import CallingSection from './CallingSection.vue'
import CategorySection from './CategorySection.vue'
import HeroSection from './HeroSection.vue'
import PopularSection from './PopularSection.vue'
</script>

<template>
  <div>
    <HeroSection />
    <CategorySection />
    <PopularSection />
    <CallingSection />
  </div>
</template>

<style scoped>
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.loader {
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top-color: #1c4d9c;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
}
</style>
