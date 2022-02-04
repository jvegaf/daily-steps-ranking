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
      const response = await apiProvider.getUsers();
      commit('setUsers', response.data.results);
    },
  },
  getters: {
    users: state => state.users,
  },
});
