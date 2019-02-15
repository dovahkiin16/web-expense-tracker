import { db } from "../../main";
import { formatDate } from "../../utils/index";
import firebase from 'firebase/app';

const defaultState = {
  transactions: [],
  transactionForm: {
    amount: 0,
    category: '',
    type: ''
  },
};

const getters = {
  transactions: state => state.transactions,
  transactionForm: state => state.transactionForm,
};

const actions = {
  watchTransactions: async context => {
    console.log(context.rootGetters['account/userId']);
    db.collection('user').doc(context.rootGetters['account/userId']).collection('transactions').orderBy('date', 'desc')
      .onSnapshot(col => {
        context.commit('clearTransactions');
        if (!col.empty) {
          col.forEach(snap => {
            const transaction = snap.data();
            console.log(transaction);
            transaction.date = formatDate(snap.get('date').toDate());
            context.commit('addTransactions', transaction);
          });
        }
      });
  },
  stopWatchingTransactions: async context => {
    const unsub = db.collection('user')
      .doc(context.rootGetters['account/userId'])
      .collection('transactions')
      .onSnapshot(() => {
      });
    unsub();
  },
  addTransaction: async (context) => {
    try {
      const transaction = context.getters['transactionForm'];
      transaction.date = firebase.firestore.Timestamp.fromDate(new Date());
      await db.collection('user').doc(context.rootGetters['account/userId']).collection('transactions').add(transaction);
    } catch (e) {
      console.log(e.message);
    }
  },
};

const mutations = {
  addTransactions: (context, data) => {
    context.transactions.push(data);
  },
  clearTransactions: context => {
    context.transactions = [];
  },
  setTransactionFormField: (context, detail) => {
    context.transactionForm[detail.field] = detail.value;
  },
};

export default {
  namespaced: true,
  state: defaultState,
  getters: getters,
  actions: actions,
  mutations: mutations,
};
