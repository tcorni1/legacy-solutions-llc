<template>
  <section class="relative bg-white overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute inset-0 z-0">
      <!-- Background image covering the entire section -->
      <img 
        src="/images/Hero-section/Hero-Section-Banner.png" 
        alt="Background" 
        class="w-full h-full object-cover position-center"
      />
    </div>

    <div class="container max-w-7xl mx-auto px-[10px] md:pt-16 md:pb-0 relative z-10">
      <div class="flex flex-col md:flex-row flex-wrap md:items-center">
        <!-- Mobile: Image First, Desktop: Image Right -->
        <div class="fadeIn md:basis-[40%] flex justify-center md:justify-end order-1 md:order-2 w-full">
          <img 
            src="/images/Hero-section/Lousiana-Family-New1.png" 
            alt="Happy family with check" 
            class="w-full max-w-lg h-auto object-contain"
          />
        </div>

        <!-- Mobile: Text Second, Desktop: Text Left -->
        <div class="relative z-10 order-2 md:basis-[60%] md:order-1 text-center md:text-left flex flex-col gap-5 p-5 md:p-0">
          <h2 class="fadeIn font-outfit text-[#00274D] text-3xl md:text-4xl md:leading-[46px] font-bold uppercase leading-tight text-center md:text-left" style="color: #00274D;">
            CLAIM WHAT'S YOURS TODAY
          </h2>
          
          <p class="fadeInUp text-[16px] text-gray-700 leading-relaxed mb-[18px]">
            Serving all 64 Louisiana parishes and helping clients nationwide. Whether your unclaimed funds are tied to a Louisiana property or another state, our experienced team can help recover what's rightfully yours.
          </p>
          
          <div class="slideInUp flex justify-center md:justify-start mt-[15px]">
            <button @click="$emit('scrollToCTA')" class="bg-orange-500 hover:bg-orange-600 text-white font-bold uppercase px-6 md:px-8 py-3 md:py-4 rounded-lg transition-colors text-base md:text-lg shadow-lg">
              START MY FREE FUNDS CHECK
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HeroSection',
  emits: ['scrollToCTA'],
});
</script>

<style scoped>
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.fadeIn {
  animation: fadeIn 2s;
}
@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
  100% {
    opacity: 1;
    transform: none;
  }
}
.fadeInUp {
  animation: fadeInUp 2s;
}

@keyframes slideInUp {
  0% {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
}
.slideInUp{
  animation: slideInUp 2s;
}
</style>
