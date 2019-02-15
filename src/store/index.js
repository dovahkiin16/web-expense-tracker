import Vue from 'vue';
import Vuex from 'vuex';
import transactionModule from './transactions';
import accountModule from './account';
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
    account: accountModule,
  },
  plugins: [vuexLocalStorage.plugin]
});
