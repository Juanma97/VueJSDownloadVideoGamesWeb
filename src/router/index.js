import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '@/components/HomePage.vue';
import LoginComponent from '@/components/LoginComponent.vue';
import RegisterComponent from '@/components/RegisterComponent.vue';
import ProfilePage from '@/components/ProfilePage.vue';

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
  {
    path: '/register',
    name: 'Register',
    components: {
      default: RegisterComponent,
    },
  }, {
    path: '/profile',
    name: 'Profile',
    components: {
      default: ProfilePage,
    },
  },
  ],
});
