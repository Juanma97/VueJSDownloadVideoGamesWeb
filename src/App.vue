<template>
  <v-app>
    <ToolbarComponent/>
    <router-view/>
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


</style>

