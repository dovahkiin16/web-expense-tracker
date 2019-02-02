import Vue from 'vue';
import './plugins/vuetify';
import App from './App.vue';
import router from './router';
import store from './store';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { config } from './config';

Vue.config.productionTip = false;

firebase.initializeApp(config);

export const db = firebase.firestore();
db.settings({timestampsInSnapshots: true});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
