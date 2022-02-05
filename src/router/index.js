import { createRouter, createWebHistory } from 'vue-router';
import RankingView from '../views/RankingView.vue';

const routes = [
  {
    path: '/',
    redirect: '/ranking',
  },
  {
    path: '/ranking',
    name: 'Ranking',
    component: RankingView,
  },
  {
    path: '/users/:id',
    name: 'User',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/UserView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
