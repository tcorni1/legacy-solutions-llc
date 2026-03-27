<template> 
  <section class="bg-white py-8 md:py-[60px] border-t border-gray-200">
    <div class="container max-w-7xl mx-auto px-4">
      
      <hr class="mb-8">

      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
        
        <img
          src="/images/logos/turbologo.webp"
          alt="Turbologo"
          class="h-[30px] sm:h-[40px] md:h-[50px] w-auto object-contain"
        />
        
        <img
          src="/images/logos/mondi-logo.webp"
          alt="Mondi"
          class="h-[30px] sm:h-[40px] md:h-[50px] w-auto object-contain"
        />
        
        <img
          src="/images/logos/logotype-logo.webp"
          alt="Logotype"
          class="h-[30px] sm:h-[40px] md:h-[50px] w-auto object-contain"
        />
        
        <img
          src="/images/logos/maxton-design.webp"
          alt="Maxton Design"
          class="h-[30px] sm:h-[40px] md:h-[50px] w-auto object-contain"
        />
        
        <img
          src="/images/logos/duragas.webp"
          alt="Duragas"
          class="h-[30px] sm:h-[40px] md:h-[50px] w-auto object-contain"
        />
        
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LogoSliderSection',
});
</script>

<style scoped>
</style>

