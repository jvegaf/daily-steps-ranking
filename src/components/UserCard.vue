<template>
  <div class="card">
    <div class="card-body">
      <div class="row align-items-center">
        <div
          class="col-12 mb-3 mb-md-0 col-md-5 col-lg-3 d-flex justify-content-center justify-content-md-start"
        >
          <div class="ms-md-4 ms-lg-5 fs-4">
            {{ name }}
          </div>
        </div>
        <div class="col-4 col-md-2 col-lg-3">
          <div class="d-flex flex-column align-items-center">
            <div class="dlabel">last week</div>
            <div class="steps">{{ weekly }}</div>
          </div>
        </div>
        <div class="col-4 col-md-2 col-lg-3">
          <div class="d-flex flex-column align-items-center">
            <div class="dlabel">last month</div>
            <div class="steps">{{ monthly }}</div>
          </div>
        </div>
        <div class="col-4 col-md-2 col-lg-3">
          <div class="d-flex flex-column align-items-center">
            <div class="dlabel">daily</div>
            <div class="steps">{{ daily }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserCard',
  props: ['name', 'weekly', 'monthly', 'daily'],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.dlabel {
  color: tomato;
}

.steps {
  font-size: 1.2rem;
}
</style>
