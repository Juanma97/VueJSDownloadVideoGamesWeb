<template>
  <div class="content-stats">
    <v-card dark>
        <v-card-title primary-title>Estadisticas de usuario</v-card-title>
        <div class="logins">
          <h3>¿Cuantas veces he iniciado sesión?</h3>
          <p>{{ currentLogins }}</p>
          <v-progress-linear v-model="currentLogins"></v-progress-linear>
        </div>
        <div class="profiles">
          <h3>¿Cuantos perfiles de usuario he descargado?</h3>
          <p>{{ currentDownloadProfiles }}</p>
          <v-progress-linear v-model="currentDownloadProfiles"></v-progress-linear>
        </div>
      </v-card>
  </div>
</template>

<script>
export default {
  name: 'ProfileStats',
  computed: {
    currentLogins() {
      return this.$store.state.logins;
    },
    currentDownloadProfiles() {
      return this.$store.state.downloadProfiles;
    },

  }
}
</script>


<style scoped>
.logins{
  padding: 16px;
}
.profiles{
  padding: 16px;
  overflow: auto;
}
</style>

