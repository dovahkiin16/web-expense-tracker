import Vue from 'vue';
import Vuex from 'vuex';
import transactionModule from './transactions';
import loanModule from './loans';
import accountModule from './account';
import navDrawerModule from './navDrawer';
import VuexPersist from 'vuex-persist';

Vue.use(Vuex);

const vuexLocalStorage = new VuexPersist({
  key: 'vuex',
  storage: window.localStorage,
  modules: ['account']
});

export default new Vuex.Store({
  modules: {
    transaction: transactionModule,
    loans: loanModule,
    account: accountModule,
    navDrawer: navDrawerModule,
  },
  plugins: [vuexLocalStorage.plugin]
});
