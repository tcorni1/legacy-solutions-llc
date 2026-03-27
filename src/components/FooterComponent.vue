<template>
  <footer class="mt-auto">
    <!-- Blue Bar with Copyright and Links -->
    <div class="bg-[#0f75bc] text-white py-4">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0">
          <!-- Left: Copyright -->
          <div class="text-sm">
            © All Rights Reserved Legacy Solutions LLC
          </div>
          
          <!-- Right: Policy Links -->
          <div class="flex flex-wrap items-center justify-center md:justify-end gap-4 text-sm">
            <router-link 
              to="/privacy-policy" 
              class="hover:text-blue-200 transition-colors"
            >
              Privacy Policy
            </router-link>
            <router-link 
              to="/terms-of-use" 
              class="hover:text-blue-200 transition-colors"
            >
              Terms of Use
            </router-link>
            <router-link 
              to="/website-disclaimer" 
              class="hover:text-blue-200 transition-colors"
            >
              Website Disclaimer
            </router-link>
            <router-link 
              to="/sms-terms" 
              class="hover:text-blue-200 transition-colors"
            >
              Sms Terms and Conditions
            </router-link>
            <router-link 
              to="/sms-disclosure" 
              class="hover:text-blue-200 transition-colors"
            >
              Required On-Page SMS Disclosure
            </router-link>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Thin separator line -->
    <div class="h-px bg-gray-300"></div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FooterComponent',
});
</script>

<style scoped>
/* Additional custom styles if needed */
</style>
