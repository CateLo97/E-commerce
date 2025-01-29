import { createRouter, createWebHistory } from 'vue-router';
import App from '../App.vue';
import Carrito from '../Carrito.vue';

const routes = [
  { path: '/', component: App },
  { path: '/carrito', component: Carrito },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
