<template>
  <v-app>
    <v-navigation-drawer
      persistent
      :clipped="clipped"
      v-model="drawer"
      enable-resize-watcher
      fixed
      app
    >
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
      <v-toolbar-side-icon @click.stop="drawer = !drawer" class="toolbar-items"></v-toolbar-side-icon>
      <v-toolbar-title class="toolbar-items">Games</v-toolbar-title>
    </v-toolbar>
  </v-app>
</template>

<script>


export default {
  name: 'App',
  components: {
  },
  data () {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
    }
  }
}
</script>

<style scoped>
.toolbar-items{
  color: white;
}
</style>

