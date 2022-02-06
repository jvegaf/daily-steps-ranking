import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/dark.css';
import 'bootstrap';
import VueApexCharts from 'vue3-apexcharts';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

createApp(App).use(store).use(router).use(VueApexCharts).mount('#app');

store.dispatch('fetchUsers');
