<template>
  <nav class="navbar navbar-dark bg-primary fixed-top justify-content-center">
    <div class="navbar-brand fs-4 fw-bolder">{{ title }}</div>
  </nav>
</template>

<script>
import { computed } from '@vue/runtime-core';
import { useStore } from 'vuex';
export default {
  setup() {
    const store = useStore();
    const title = computed(() => store.getters.getHeaderTitle);
    const showBack = computed(() => {
      return title !== 'Rankings';
    });
    return { title, showBack };
  },
};
</script>
