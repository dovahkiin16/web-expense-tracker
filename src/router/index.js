import Vue from 'vue';
import Router from 'vue-router';
import { requireAuth, requireNoUser } from "./routeRules";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      beforeEnter: requireNoUser,
      component: () => import(/* webpackChunkName: "login" */ '../views/LoginView')
    },
    {
      path: '/transactions',
      name: 'transactions',
      beforeEnter: requireAuth,
      component: () => import(/* webpackChunkName: "transactions" */ '../views/TransactionView')
    }
  ]
})
