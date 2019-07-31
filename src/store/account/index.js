const defaultState = {
  userId: '',
};

const getters = {
  userId: state => state.userId,
};

const mutations = {
  setUserId(context, userId) {
    context.userId = userId;
  },
};

const actions = {
  async logout({ commit }) {
    await this.dispatch('transaction/stopWatchingTransactions');
    commit('setUserId', '');
  },
}

export default {
  namespaced: true,
  state: defaultState,
  getters,
  mutations,
  actions,
}
