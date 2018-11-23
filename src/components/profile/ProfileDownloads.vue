<template>
<div class="profiles">
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
</div>
</template>

<script>

export default {
  name: 'ProfileDownloads',
  data() {
    return {

    }
  },
  computed: {
    currentProfiles() {
      return this.$store.state.profiles;
    },
  }
}
</script>


<style scoped>
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
  height: 100%;
}
</style>


