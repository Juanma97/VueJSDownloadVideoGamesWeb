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
    <v-toolbar-title id="title-nav-drawer">My profile</v-toolbar-title>
    <v-list>
      <v-list-tile>
        <v-list-tile-title>Tile 1</v-list-tile-title>
      </v-list-tile>
      <v-list-tile>
        <v-list-tile-title>Tile 2</v-list-tile-title>
      </v-list-tile>
      <v-list-tile>
        <v-list-tile-title>Tile 3</v-list-tile-title>
      </v-list-tile>
    </v-list>
    </v-navigation-drawer>
        <v-toolbar app color="primary">
            <v-toolbar-side-icon v-if="login" @click.stop="drawer = !drawer" class="toolbar-items"></v-toolbar-side-icon>
            <router-link :to="{ name: 'Home' }"><v-toolbar-title class="toolbar-items">Games</v-toolbar-title></router-link>
            <v-toolbar-items class="toolbar-items-buttons">
              <router-link class="button" :to="{ name: 'Login' }">
                <v-btn right flat color="white">Login</v-btn>
              </router-link>
              <router-link class="button" :to="{ name: 'Register' }">
                <v-btn  right flat color="white">Register</v-btn>
              </router-link>
            </v-toolbar-items>
        </v-toolbar>
    </div>
</template>


<script>
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
  right: 90px;
}

#title-nav-drawer{
  height: 64px;
  padding: 16px;
  background-color: black; 
  color: white;
}
</style>

