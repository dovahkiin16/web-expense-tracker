import store from '../store/index';
import { routeNames } from "./routeNames";

export const requireAuth =  (to, from, next) => {
  if (store.getters.userId) {
    next();
  } else {
    next(routeNames.login);
  }
};

export const requireNoUser = (to, from, next) => {
  if (!store.getters.userId) {
    next();
  } else {
    next(routeNames.transactions);
  }
};
