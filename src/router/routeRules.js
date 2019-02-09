import store from '../store';

export const requireAuth =  (to, from, next) => {
  if (store.getters.userId) {
    next();
  } else {
    next({name: 'login'});
  }
};

export const requireNoUser = (to, from, next) => {
  if (!store.getters.userId) {
    next();
  } else {
    next({name: 'transactions'});
  }
};
