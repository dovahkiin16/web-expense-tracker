import Vue from 'vue';
import Vuex from 'vuex';
import { db } from "./main";
import { formatDate } from "./utils";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userId: 'XoCGXth3HbQstbK6JNaZ',
    transactions: []
  },
  getters: {
    userId: state =>  state.userId,
    transactions: state => state.transactions,
  },
  mutations: {
    addTransactions: (context, data) => {
      context.transactions.push(data);
    },
    clearTransactions: context => {
      context.transactions = [];
    }
  },
  actions: {
    watchTransactions: async context => {
      db.collection('user').doc(context.getters.userId).collection('transactions')
        .onSnapshot(col => {
          context.commit('clearTransactions');
          if (!col.empty) {
            col.forEach(snap => {
              const transaction = snap.data();
              transaction.date = formatDate(snap.get('date').toDate());
              context.commit('addTransactions', transaction);
            });
          }
        });
    }
  },
  stopWatchingTransactions: async context => {
    const unsub = db.collection('user')
      .doc(context.getters.userId)
      .collection('transactions')
      .onSnapshot(() => {
      });
    unsub();
  }
});
