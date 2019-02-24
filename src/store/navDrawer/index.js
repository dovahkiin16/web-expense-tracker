const defaultState = {
  isOpen: false,
};

const getters = {
  isOpen: state => state.isOpen,
};

const mutations = {
  open: context => {
    context.isOpen = true;
  },
  close: context => {
    context.isOpen = false;
  },
};

export default {
  namespaced: true,
  state: defaultState,
  getters: getters,
  mutations: mutations,
};
