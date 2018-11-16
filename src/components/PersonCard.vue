<template>
<div class="content">
    <v-card class="card" flat hover v-for="(user, index) in users" :key="index">
        <img v-bind:src="user.picture.medium"/>
        <v-card-title>{{ user.name.first }}</v-card-title>
        <v-card-text>{{user.gender}}</v-card-text>
        <v-card-actions></v-card-actions>
    </v-card>
</div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'PersonCard',
    data(){
        return {
            users: [],
        };
    },
    async created(){
    axios.get("https://randomuser.me/api/?results=10", {
    })
    .then(response => {
        this.users = response.data.results;
    })
  .catch(e => {
    console.log("error", e);
  });
    }
}
</script>

<style scoped>
.content{
    display: grid;
    grid-template-columns: 300px 300px 300px;
    justify-content: center;
    position: relative;
    top: 50px;
    width: 100%;
}
.card{
    margin: 32px;
}
</style>

