import { createRouter, createWebHistory } from 'vue-router';
import MainView from '../views/MainView.vue';
import ProductDetail from '../views/ProductDetail.vue'

const routes = [
  {
    path: '/',
    name: 'MainView',
    component: MainView,
  },

  {
    path: '/product/:productId',
    name: 'ProductDetail',
    component: ProductDetail,
    props: true,
  },
 
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
