import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentUser: null,
    name: '',
  },
  mutations: {

    setCurrentUser(state, payload) {
    // eslint-disable-next-line
      state.currentUser = payload;
      if (payload != null) {
        // eslint-disable-next-line
        state.name = payload.email;
      }
    },
  },
  actions: {

  },
});
