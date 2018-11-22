<template>
    <div class="content">
        <v-navigation-drawer
      persistent
      :clipped="clipped"
      v-model="drawer"
      enable-resize-watcher
      fixed
      app
    >
    <v-toolbar-title id="title-nav-drawer">{{ this.$store.state.name }}</v-toolbar-title>
    <v-list>
      <v-list-tile>
        <router-link class="tile" :to="{ name: 'Profile' }">
          <v-list-tile-title>Mi perfil</v-list-tile-title>
        </router-link>
      </v-list-tile>
      <v-list-tile>
        <v-list-tile-title>Mis descargas</v-list-tile-title>
      </v-list-tile>
      <v-list-tile>
        <v-list-tile-title>Acerca</v-list-tile-title>
      </v-list-tile>
    </v-list>
    </v-navigation-drawer>
        <v-toolbar app color="primary">
            <v-toolbar-side-icon v-if="currentUser" @click.stop="drawer = !drawer" class="toolbar-items"></v-toolbar-side-icon>
            <router-link :to="{ name: 'Home' }"><v-toolbar-title class="toolbar-items">USearch</v-toolbar-title></router-link>
            <v-toolbar-items v-if="!currentUser" class="toolbar-items-buttons">
              <router-link class="button" :to="{ name: 'Login' }">
                <v-btn v-if="!currentUser" right flat color="white">Login</v-btn>
              </router-link>
              <router-link class="button" :to="{ name: 'Register' }">
                <v-btn v-if="!currentUser" right flat color="white">Register</v-btn>
              </router-link>
            </v-toolbar-items>
            <v-toolbar-items v-if="currentUser" class="toolbar-items-buttons-logout">
              <router-link class="button" :to="{ name: 'Home' }">
                <v-btn v-if="currentUser" right flat color="white" @click="signOut">Logout</v-btn>
              </router-link>
            </v-toolbar-items>
        </v-toolbar>
    </div>
</template>


<script>
import firebase from 'firebase';
import database from '@/services/database';

export default {
  name: 'ToolbarComponent',
  components: {
    
  },
  data () {
    return {
      clipped: false,
      fixed: false,
      login: true,
      drawer: false,
    }
  },
  methods: {
    async signOut () {
      await database.signOut();
    }
  },
  computed: {
    currentUser() {
      return this.$store.state.currentUser;
    },
  }
}
</script>

<style scoped>
.toolbar-items{
  color: white;
}

.button{
  height: 100%;
}
.tile{
  text-decoration: none;
}
.tile:hover{
  cursor: pointer;
}

.grid{
  width: 100%;
  justify-content: center;
  display: grid;
  grid-template-columns: 300px 300px 300px;
  grid-gap: 16px;
}

.toolbar-items-buttons{
  width: 100px;
  position: absolute;
  right: 200px;
}

.toolbar-items-buttons-logout{
  width: 100px;
  position: absolute;
  right: 1%;
}

#title-nav-drawer{
  height: 64px;
  padding: 16px;
  background-color: black; 
  color: white;
}
</style>

