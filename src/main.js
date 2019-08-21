import Vue from 'vue';
import vuetify from './plugins/vuetify';
import App from './App.vue';
import router from './router/index';
import store from './store/index';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { config } from './config';

Vue.config.productionTip = false;

firebase.initializeApp(config);

export const db = firebase.firestore();
db.enablePersistence();

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app');
