<template>
  <header class="bg-white shadow-sm px-[10px]">
    <div class="container max-w-7xl mx-auto pt-[5px]">
      <div class="flex items-center justify-between">
        <!-- Left side: Logo -->
        <router-link to="/" class="flex items-center p-[10px]">
          <img 
            src="/images/logo/logo-legacy-updated-1024x433-1.png" 
            alt="Legacy Solutions LLC Logo" 
            class="h-[42.29px] md:h-16 w-auto object-contain"
          />
        </router-link>

        <!-- Right side: Contact Information -->
        <div class="flex items-center space-x-4 p-[10px]">
          <div class="flex items-center space-x-3">
            <!-- Phone Icon -->
            <div class="w-7 h-7 md:w-11 md:h-11 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
              <svg class="w-[18px] h-[18px] md:w-[22px] md:h-[22px] text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            
            <!-- Contact Text and Phone Number -->
            <div>
              <p class="text-[12px] leading-[22px] md:text-sm text-[#00274d] mt-2">Have Any Questions</p>
              <a href="tel:8336283857" class="font-outfit text-[15px] leading-[26px] md:text-2xl font-bold transition-colors hover:opacity-80" style="color: #00274D;">
                833-628-3857
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HeaderComponent',
});
</script>

<style scoped>
/* Additional custom styles if needed */
</style>
