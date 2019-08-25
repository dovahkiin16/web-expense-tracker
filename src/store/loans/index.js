import { db } from '../../main';

const defaultState = {
  loaners: [],
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
};

const mutations = {
  setLoaners(state, data) {
    state.loaners = data;
  }
};

export default {
  namespaced: true,
  state: defaultState,
  getters: getters,
  actions: actions,
  mutations: mutations,
}