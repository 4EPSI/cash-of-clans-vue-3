import { createRouter, createWebHashHistory } from "vue-router";  // createWebHistory

const routerHistory = createWebHashHistory();

import HomePage from './pages/homeContent.vue';
import AboutPage from './pages/aboutContent.vue'
import NotFoundPage from "./pages/noteFound.vue";
import Item from './pages/_itemAlias.vue'

const routers = createRouter({
  history: routerHistory,
  routes: [
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
      component: Item,
    },
    {
      // path: '/:PathMatch(.*)*',
      path: '/:catchAll(.*)',
      name: '404',
      component: NotFoundPage,
    }
  ]
})

export default routers
