import { categories } from '../../config/constants';
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

  balance: state => {
    return state.transactions.reduce((acc, val) => {
      if (val.type === 'credit') {
        return acc - val.amount;
      }

      return acc + parseInt(val.amount);
    }, 0);
  },

  foodExpenses: state => {
    return state.transactions.reduce((acc, val) => {
      if (val.category === categories.FOOD.name) {
        return acc + parseInt(val.amount);
      }

      return acc;
    }, 0);
  },
};

const actions = {
  watchTransactions(context) {
    const userId = context.rootGetters['account/userId'];

    db.collection('user')
      .doc(userId)
      .collection('transactions')
      .orderBy('date', 'desc')
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

  async stopWatchingTransactions(context) {
    const userId = context.rootGetters['account/userId'];

    if (userId === '') {
      return;
    }

    const unsub = db.collection('user')
      .doc(userId)
      .collection('transactions')
      .onSnapshot(() => { });
    unsub();
  },

  async addTransaction(context) {
    const transaction = context.getters['transactionForm'];
    transaction.date = firebase.firestore.Timestamp.fromDate(new Date());

    await db.collection('user')
      .doc(context.rootGetters['account/userId'])
      .collection('transactions')
      .add(transaction);
  },
};

const mutations = {
  addTransactions(context, data) {
    context.transactions.push(data);
  },

  clearTransactions(context) {
    context.transactions = [];
  },

  setTransactionFormField(context, detail) {
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
