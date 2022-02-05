import { createStore } from 'vuex';
import { apiProvider } from '../api/api-provider';

export default createStore({
  state: {
    users: [],
  },
  mutations: {
    setUsers(state, users) {
      state.users = users;
    },
  },
  actions: {
    async fetchUsers({ commit }) {
      const dailyResponse = await apiProvider.getDailyRanking();
      const weeklyResponse = await apiProvider.getWeeklyRanking();
      const monthlyResponse = await apiProvider.getMonthlyRanking();

      const dailyResults = dailyResponse.data.results;
      const weeklyResults = weeklyResponse.data.results;
      const monthlyResults = monthlyResponse.data.results;

      const users = dailyResults.map((user, index) => {
        return {
          ...user,
          daily_avg: user.avg_steps,
          weekly_avg: weeklyResults[index].avg_steps,
          monthly_avg: monthlyResults[index].avg_steps,
        };
      });

      commit('setUsers', users);
    },

    async fetchUser({ commit, state }, userId) {
      const users = [...state.users];
      const user = users.find(u => {
        return u.id === userId;
      });
      if (user.workouts !== undefined) return;

      const response = await apiProvider.getUserWorkouts(user.username);
      const workouts = response.data.results;

      const usersUpdated = this.state.users.map(u => {
        if (u.id === userId) {
          u.workouts = workouts;
        }
        return u;
      });

      commit('setUsers', usersUpdated);
    },
  },
  getters: {
    users: state => state.users,
    getUser: state => id => {
      return state.users.find(u => u.id === id);
    },
  },
});
