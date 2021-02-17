import { categories } from '../../config/constants';
import { db } from '../../main';

const defaultState = {
  loaners: [],
  loanForm: {
    amount: 0,
    name: ''
  },
};

const getters = {
  totalLoans: state => {
    state.loaners.reduce((total, current) => {
      return total + current.amount
    }, 0);
  },
};

const actions = {
  async fetchLoaners({commit, rootGetters}) {
    const userId = rootGetters['account/userId'];

    const loanersDocs = await db.collection('user')
      .doc(userId)
      .collection('loaners')
      .get();

    const loaners = loanersDocs.empty ? [] : loanersDocs.docs.map(v => v.data());

    commit('setLoaners', loaners);
  },

  async addLoan({state, commit, dispatch, rootGetters}) {
    const loan = state.loanForm;
    const transaction = {
      amount: loan.amount,
      category: categories.LOAN.name,
      type: categories.LOAN.type,
    };

    // set transaction form fields
    Object.keys(transaction).forEach(key => {
      const detail = {
        field: key,
        value: transaction[key]
      };

      commit('transaction/setTransactionFormField', detail, {root: true});
    });

    // addTransaction and clear form
    await dispatch('transaction/addTransaction', null, {root: true});
    commit('transaction/clearTransactionForm', null, {root: true});

    const loansCollection = await db.collection('user')
      .doc(rootGetters['account/userId'])
      .collection('loaners');
    
    const loanersCollection = await loansCollection.where('name', '==', loan.name).get();

    if (loanersCollection.empty) {
      loansCollection.add(loan);
    } else {
      const oldAmount = loanersCollection.docs[0].get('amount');
      const newAmount = parseInt(oldAmount) + parseInt(loan.amount);

      await loanersCollection.docs[0].ref.update({amount: newAmount});
    }

    dispatch('fetchLoaners');
  },

  async payLoan({state, commit, dispatch, rootGetters}) {
    const transaction = {
      amount: amount,
      category: categories.LOAN_PAYMENT.name,
      type: categories.LOAN_PAYMENT
    };

    // set transaction form fields
    Object.keys(transaction).forEach(key => {
      const detail = {
        field: key,
        value: transaction[key]
      };

      commit('transaction/setTransactionFormField', detail, {root: true});
    });

    // addTransaction and clear form
    await dispatch('transaction/addTransaction', null, {root: true});
    commit('transaction/clearTransactionForm', null, {root: true});

    const loansCollection = await db.collection('user')
      .doc(rootGetters['account/userId'])
      .collection('loaners');
    
    const loanersCollection = await loansCollection.where('name', '==', loan.name).get();
  }
};

const mutations = {
  setLoaners(state, data) {
    state.loaners = data;
  },

  setLoanFormField(state, detail) {
    state.loanForm[detail.field] = detail.value;
  },

  clearLoanForm(state) {
    state.loanForm = defaultState;
  }
};

export default {
  namespaced: true,
  state: defaultState,
  getters: getters,
  actions: actions,
  mutations: mutations,
}