<template>
  <div class="min-h-screen flex flex-col font-sans">
    <HeaderComponent />
    <main class="flex-grow">
      <router-view />
    </main>
    <FooterComponent />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HeaderComponent from './HeaderComponent.vue';
import FooterComponent from './FooterComponent.vue';

export default defineComponent({
  name: 'LayoutComponent',
  components: {
    HeaderComponent,
    FooterComponent,
  },
});
</script>

<style scoped>
/* Layout styles */
</style>
