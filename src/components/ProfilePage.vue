<template>
  <div class="content-profile">
    <h1>{{this.$store.state.name}}</h1>
    <div class="dashboard">
      <v-card height="500px">
        <v-card-title primary-title=true>Estadisticas de usuario</v-card-title>
        
      </v-card>
      <v-card>
        <v-card-title>Ultimos perfiles descargados</v-card-title>
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
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto;
  grid-column-gap: 16px;
}
</style>




