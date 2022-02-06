<template>
  <div class="card spinner-card">
    <div
      class="spinner-border text-primary"
      style="width: 3rem; height: 3rem"
      role="status"
    >
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
</template>

<style scoped>
.spinner-card {
  height: 18em;
  width: 18em;
  display: grid;
  place-items: center;
}
</style>
