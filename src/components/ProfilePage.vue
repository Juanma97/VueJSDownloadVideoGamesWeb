<template>
  <div class="content-profile">
    <h1>Bienvenido {{this.$store.state.name}}</h1>
    <div class="dashboard">
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
      <v-card dark class="profiles-container">
        <v-card-title primary-title>Ultimos perfiles descargados</v-card-title>
        <v-card light class="profiles-download" v-for="(user, index) in currentProfiles" :key="index">
          <v-avatar class="img">
            <img v-bind:src="user.img"/>
          </v-avatar>
          <v-card-title>{{ user.name.substring(0,1).toUpperCase() 
                                    + user.name.substring(1) }}</v-card-title>
        </v-card>
      </v-card>
      <v-card>
        <v-card-title>Otros</v-card-title>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfilePage',
  data() {
    return {

    }
  },
  computed: {
    currentUser() {
      return this.$store.state.currentUser;
    },
    currentLogins() {
      return this.$store.state.logins;
    },
    currentDownloadProfiles() {
      return this.$store.state.downloadProfiles;
    },
    currentProfiles() {
      return this.$store.state.profiles;
    },

  }
}
</script>

<style scoped>
.content-profile{
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    top: 100px;
    padding: 16px;
    width: 100%;
}
.dashboard{
  margin: 16px 0 0 0;
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: 300px 300px;
  grid-column-gap: 16px;
  grid-row-gap: 16px;
}
.logins{
  padding: 16px;
}
.profiles{
  padding: 16px;
  overflow: auto;
}
.img{
  border-radius: 100%;
  margin: 8px;
}
.profiles-download{
  margin: 16px;
  display: flex;
}
.profiles-container{
  overflow: auto;
}
</style>




