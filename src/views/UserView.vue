<template>
  <div>
    <h1>{{ user.username }}</h1>
    <div>{{ user.daily_avg }}</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'UserView',
  data() {
    return {
      userId: parseInt(this.$route.params.id),
    };
  },
  computed: {
    ...mapGetters(['getUser']),
    user() {
      return this.getUser(this.userId);
    },
  },
};
</script>
