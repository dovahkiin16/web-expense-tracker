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
};

export default {
  namespaced: true,
  state: defaultState,
  getters: getters,
  mutations: mutations,
}
