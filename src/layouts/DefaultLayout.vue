<template>
  <div>
    <AppNavbar class="mb-[100px]" />
    <router-view />
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import AppNavbar from '@/components/AppNavbar.vue'
import AppFooter from '@/components/AppFooter.vue'
</script>
