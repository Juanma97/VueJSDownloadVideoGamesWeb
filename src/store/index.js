import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentUser: null,
    name: '',
    logins: 0,
    downloadProfiles: 0,
    profiles: [],
  },
  mutations: {

    setCurrentUser(state, payload) {
    // eslint-disable-next-line
      state.currentUser = payload;
    },
    setCurrentName(state, payload) {
      state.name = payload;
    },
    setCurrentLogins(state, payload) {
      state.logins = payload;
    },
    setCurrentDownloadProfiles(state, payload) {
      state.downloadProfiles = payload;
    },
    setCurrentProfiles(state, payload) {
      state.profiles = payload;
    },
  },
  actions: {

  },
});
