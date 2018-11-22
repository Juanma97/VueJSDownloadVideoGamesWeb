import Vue from 'vue';
import './plugins/vuetify';
import * as firebase from 'firebase';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

let app;

const initialize = () => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App),
    }).$mount('#app');
  }
};
/* eslint-disable */
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    const ref = firebase.database().ref('Users');
    ref.on('value', function(snapshot) {
      snapshot.forEach(function(childSnapshot){
        if (childSnapshot.val().UID == user.uid) {
          store.commit('setCurrentName', childSnapshot.val().name);
          store.commit('setCurrentLogins', childSnapshot.val().logins);
          store.commit('setCurrentDownloadProfiles', childSnapshot.val().downloadProfiles);
          store.commit('setCurrentProfiles', childSnapshot.val().profilesDownload);
        }
      });
    })
    store.commit('setCurrentUser', user);
  } else {
    store.commit('setCurrentUser', null);
  }
  initialize();
});
