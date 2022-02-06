<template>
  <app-header></app-header>
  <router-view class="view" />
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';
export default {
  components: { AppHeader },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.view {
  padding-top: 80px;
}

.spinner {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (prefers-color-scheme: light) {
  body {
    background-color: #f4f7fc;
  }
}
</style>
