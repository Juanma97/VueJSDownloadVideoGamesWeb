<template>
  <div class="content-profile">
    <h1>Bienvenido {{this.$store.state.name}}</h1>
    <div class="dashboard">
      <ProfileStats/>
      <ProfileDownloads/>
      <v-card>
        <v-card-title>Otros</v-card-title>
      </v-card>
    </div>
  </div>
</template>

<script>
import ProfileStats from '@/components/profile/ProfileStats.vue';
import ProfileDownloads from '@/components/profile/ProfileDownloads.vue';

export default {
  name: 'ProfilePage',
  components: {
    ProfileStats,
    ProfileDownloads,
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
  margin: 16px 0 0 0;
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: 300px 300px;
  grid-column-gap: 16px;
  grid-row-gap: 16px;
}

</style>




