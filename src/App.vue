<template>
  <LayoutComponent />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LayoutComponent from './components/LayoutComponent.vue';

export default defineComponent({
  name: 'App',
  components: {
    LayoutComponent,
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
