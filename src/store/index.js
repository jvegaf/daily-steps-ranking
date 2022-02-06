import { createStore } from 'vuex';
import { apiProvider } from '../api/api-provider';
import { UtilDate } from '../util/utilDate';

const workoutsDate = (dates, workouts) => {
  return dates.map(day => {
    const workout = {};
    workout.date = day;
    workout.steps = 0;
    workouts.find(w => {
      if (w.date === day) {
        workout.steps = w.steps;
      }
    });
    return workout;
  });
};

export default createStore({
  state: {
    users: [],
    headerTitle: 'Rankings',
    isLoading: false,
  },
  mutations: {
    setUsers: (state, users) => {
      state.users = users;
    },
    setHeaderTitle: (state, title) => {
      state.headerTitle = title;
    },
    setIsLoading: (state, isLoading) => {
      state.isLoading = isLoading;
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
      commit('setIsLoading', true);
      const users = [...state.users];
      const user = users.find(u => {
        return u.id === userId;
      });
      if (user.workouts !== undefined) return;

      const response = await apiProvider.getUserWorkouts(user.username);
      const workouts = response.data.results;

      const weekDates = UtilDate.weekDates();
      const monthDates = UtilDate.monthDates();

      const weekWorkouts = workoutsDate(weekDates, workouts);
      const monthWorkouts = workoutsDate(monthDates, workouts);

      const usersUpdated = this.state.users.map(u => {
        if (u.id === userId) {
          u.workouts = workouts;
          u.week_workouts = weekWorkouts;
          u.month_workouts = monthWorkouts;
        }
        return u;
      });

      commit('setUsers', usersUpdated);
      commit('setIsLoading', false);
    },

    async setTitle({ commit }, title) {
      commit('setHeaderTitle', title);
    },
  },
  getters: {
    getHeaderTitle: state => state.headerTitle,
    getAllUsers: state => state.users,
    getUser: state => id => {
      return state.users.find(u => u.id === id);
    },
    getIsLoading: state => state.isLoading,
  },
});
