import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentUser: null,
  },
  mutations: {

    setCurrentUser(state, payload) {
    // eslint-disable-next-line
      state.currentUser = payload;
    },
  },
  actions: {

  },
});
