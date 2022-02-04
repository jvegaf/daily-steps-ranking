<template>
  <div class="d-flex flex-column gap-3" v-if="users.length">
    <div v-for="(user, index) in users" :key="index">
      <div class="card">
        <div class="card-body">
          <div class="row align-items-center">
            <div class="col-md-4">
              <div class="h4">{{ user.username }}</div>
            </div>
            <div class="col-md-8">
              <div>{{ user.avg_steps }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  computed: {
    users() {
      return this.$store.getters.users;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
