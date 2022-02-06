<template>
  <div class="card">
    <div class="card-body">
      <div class="row align-items-center">
        <div class="position">
          {{ index + 1 }}
        </div>
        <div
          class="col-12 mb-3 mb-md-0 col-md-4 col-lg-3 d-flex justify-content-center justify-content-md-start"
        >
          <div class="fw-bolder ms-md-4 ms-lg-5 fs-3">
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
  props: ['index', 'name', 'weekly', 'monthly', 'daily'],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.position {
  position: absolute;
  top: 0.2em;
  left: 0.2em;
  width: 2.2em; /* em unit */
  padding: 0.3em; /* em unit */
  border-radius: 50%;
  text-align: center;
  background: #db8679;
  color: #fefefe;
}

.dlabel {
  color: tomato;
}

.steps {
  font-size: 1.4rem;
}
</style>
