import Vue from 'vue';
import Router from 'vue-router';
import { requireAuth, requireNoUser } from "./routeRules";
import { routeNames } from "./routeNames";

Vue.use(Router);

export default new Router({
  routes: [
    {
      ...routeNames.login,
      path: '/',
      beforeEnter: requireNoUser,
      component: () => import(/* webpackChunkName: "login" */ '../views/LoginView')
    },
    {
      ...routeNames.transactions,
      path: '/transactions',
      beforeEnter: requireAuth,
      component: () => import(/* webpackChunkName: "basic-home" */ '../views/TransactionView')
    },
    {
      ...routeNames.home,
      path: '/home',
      beforeEnter: requireAuth,
      component: () => import(/* webpackChunkName: "basic-home" */ '../views/HomeView')
    },
  ]
})
