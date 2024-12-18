import { createRouter, createWebHashHistory } from "vue-router";  // createWebHistory

import HomePage from './pages/homeContent.vue';
import AboutPage from './pages/aboutContent.vue'
import NotFoundPage from "./pages/noteFound.vue";
import Item from './pages/_itemAlias.vue'
import items from './seeders/items.js'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/about',
    name: 'about',
    component: AboutPage
  },
  {
    path: '/:itemAlias',
    name: 'itemAlias',
    component: Item
  },
  {
    path: '/404',
    name: '404',
    component: NotFoundPage
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/404'
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  if (to.name === 'itemAlias') {
    const alias = to.params.itemAlias;
    const isValid = items.some(item => item.alias === alias);
    if (!isValid) {
      next({ name: '404' });
    } else {
      next();
    }
  } else {
    next();
  }
});


export default router;