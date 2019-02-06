import Vue from 'vue';
import Vuex from 'vuex';
import { db } from "./main";
import { formatDate } from "./utils";
import firebase from 'firebase/app';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userId: 'XoCGXth3HbQstbK6JNaZ',
    transactions: [],
    transactionForm: {
      amount: 0,
      category: '',
      type: ''
    }
  },
  getters: {
    userId: state =>  state.userId,
    transactions: state => state.transactions,
    transactionForm: state => state.transactionForm
  },
  mutations: {
    addTransactions: (context, data) => {
      context.transactions.push(data);
    },
    clearTransactions: context => {
      context.transactions = [];
    },
    setTransactionFormField: (context, detail) => {
      context.transactionForm[detail.field] = detail.value;
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
    },
    stopWatchingTransactions: async context => {
      const unsub = db.collection('user')
        .doc(context.getters.userId)
        .collection('transactions')
        .onSnapshot(() => {
        });
      unsub();
    },
    addTransaction: async (context) => {
      try {
        const transaction = context.getters.transactionForm;
        transaction.date = firebase.firestore.Timestamp.fromDate(new Date());
        await db.collection('user').doc(context.getters.userId).collection('transactions').add(transaction);
      } catch (e) {
        console.log(e.message);
      }
    }
  },
});
