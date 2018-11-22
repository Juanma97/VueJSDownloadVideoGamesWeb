<template>
  <v-app>
    <ToolbarComponent/>
    <router-view/>
    <v-footer class="pa-3" app dark fixed>
      <v-spacer></v-spacer>
      <div><a href="https://github.com/Juanma97">Github</a></div>
      <v-spacer></v-spacer>
      <div>&copy; {{ new Date().getFullYear() }}  Juanma Perez</div>
    </v-footer>
  </v-app>
</template>

<script>
import ToolbarComponent from './components/ToolbarComponent.vue';
import HomePage from './components/HomePage.vue';
import LoginComponent from './components/LoginComponent.vue';

export default {
  name: 'App',
  components: {
    HomePage,
    LoginComponent,
    ToolbarComponent,
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>
a{
  text-decoration: none;
  color: white;
}

</style>

