<template>
  <div class="container">
    <div class="d-flex flex-column gap-3" v-if="users.length">
      <div v-for="(user, index) in users" :key="index">
        <user-card
          :index="index"
          :name="user.username"
          :weekly="user.weekly_avg"
          :monthly="user.monthly_avg"
          :daily="user.daily_avg"
          @click="showUser(user.id)"
          v-bind:style="{ cursor: 'pointer' }"
        />
      </div>
    </div>
    <div v-else class="spinner">
      <spinner />
    </div>
  </div>
</template>

<script>
import UserCard from '@/components/UserCard.vue';
import Spinner from '@/components/Spinner.vue';
import { useStore } from 'vuex';
import { computed, onMounted } from '@vue/runtime-core';
import { useRouter } from 'vue-router';

export default {
  name: 'RankingView',
  components: {
    UserCard,
    Spinner,
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    const users = computed(() => {
      const list = store.getters.getAllUsers;
      return list.sort((a, b) =>
        a.daily_avg > b.daily_avg ? -1 : b.daily_avg > a.daily_avg ? 1 : 0
      );
    });
    const showUser = id => {
      store.dispatch('fetchUser', id);
      router.push({ name: 'User', params: { id } });
    };

    onMounted(() => {
      store.dispatch('fetchUsers');
      store.dispatch('setTitle', 'Rankings');
    });

    return { users, showUser };
  },
};
</script>
