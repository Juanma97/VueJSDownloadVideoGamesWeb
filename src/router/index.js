import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '@/components/HomePage.vue';
import LoginComponent from '@/components/LoginComponent.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'Home',
    components: {
      default: HomePage,
    },
  },
  {
    path: '/login',
    name: 'Login',
    components: {
      default: LoginComponent,
    },
  },
  ],
});
