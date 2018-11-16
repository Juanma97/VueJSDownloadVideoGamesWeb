<template>
<div class="content">
    <v-card class="card" flat hover v-for="(user, index) in users" :key="index">
        <img class="img-user" v-bind:src="user.picture.large"/>
        <v-card-title>{{ user.name.first }}</v-card-title>
        <v-card-text>{{user.gender}}</v-card-text>
        <v-card-actions>
            <v-layout justify-center>
                <v-btn color="primary">Download profile!</v-btn>
            </v-layout>
        </v-card-actions>
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
            data: false,
        };
    },
    async created(){
    axios.get("https://randomuser.me/api/?results=100", {
    })
    .then(response => {
        this.users = response.data.results;
        this.data = true;
        this.$emit('person-card:change', this.data);
        
    })
  .catch(e => {
    console.log("error", e);
  });
    }
}
</script>

<style scoped>
.img-user{
    width: 100%;
}
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

