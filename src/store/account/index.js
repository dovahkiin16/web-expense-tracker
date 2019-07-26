const defaultState = {
  userId: '',
};

const getters = {
  userId: state =>  state.userId,
};

const mutations = {
  setUserId: (context, userId) => {
    context.userId = userId;
  },

  logout: (context) => {
    context.userId = '';
  }
};

export default {
  namespaced: true,
  state: defaultState,
  getters,
  mutations,
}
