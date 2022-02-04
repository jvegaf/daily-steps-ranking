<template>
  <div class="container">
    <div class="d-flex flex-column gap-3" v-if="users.length">
      <div v-for="(user, index) in users" :key="index">
        <user-card
          :name="user.username"
          :weekly="user.weekly_avg"
          :monthly="user.monthly_avg"
          :daily="user.daily_avg"
          @click="showUser(user.id)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import UserCard from '@/components/UserCard.vue';

export default {
  name: 'RankingView',
  components: {
    UserCard,
  },
  computed: {
    users() {
      const list = this.$store.getters.users;
      return list.sort((a, b) =>
        a.daily_avg > b.daily_avg ? -1 : b.daily_avg > a.daily_avg ? 1 : 0
      );
    },
  },
  methods: {
    showUser(id) {
      this.$router.push(`/users/${id}`);
    },
  },
};
</script>
