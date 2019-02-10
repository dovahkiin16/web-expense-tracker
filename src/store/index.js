import Vue from 'vue';
import Vuex from 'vuex';
import transactionModule from './transactions';
import accountModule from './account';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    transaction: transactionModule,
    account: accountModule,
  },
});
