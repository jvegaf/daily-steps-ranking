<template>
  <div class="container">
    <div class="d-grid gap-5" v-if="!loading">
      <div class="card">
        <div class="card-body">
          <bar-chart :workouts="weekWorkouts" :horizontal="false"></bar-chart>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <heat-map-chart :workouts="monthWorkouts"></heat-map-chart>
        </div>
      </div>
    </div>
    <div v-else class="spinner">
      <spinner />
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core';
import { useStore } from 'vuex';
import HeatMapChart from '@/components/HeatMapChart.vue';
import BarChart from '@/components/BarChart.vue';
import Spinner from '@/components/Spinner.vue';

export default {
  components: { HeatMapChart, BarChart, Spinner },
  name: 'UserView',
  props: ['id'],
  setup(props) {
    const store = useStore();
    const users = computed(() => store.getters.getAllUsers);
    const uid = parseInt(props.id);
    const user = computed(() => users.value.find(u => u.id === uid));
    const isLoading = computed(() => store.getters.getIsLoading);

    const name = computed(() => user.value.username);
    const weekWorkouts = computed(() => user.value.week_workouts);
    const monthWorkouts = computed(() => user.value.month_workouts);

    return {
      weekWorkouts: weekWorkouts,
      monthWorkouts: monthWorkouts,
      userName: name,
      loading: isLoading,
    };
  },
  mounted() {
    this.$nextTick(function () {
      this.$store.dispatch('setTitle', this.userName);
    });
  },
};
</script>
