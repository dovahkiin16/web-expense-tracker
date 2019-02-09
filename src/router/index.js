import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import(/* webpackChunkName: "login" */ '../views/LoginView')
    },
    {
      path: '/transactions',
      name: 'transactions',
      component: () => import(/* webpackChunkName: "transactions" */ '../views/TransactionView')
    }
  ]
})
