<template>
<div class="content">
    <v-card class="card" flat hover v-for="(user, index) in users" :key="index">
        <img class="img-user" v-bind:src="user.picture.large"/>
        <v-card-title class="title">{{ user.name.first.substring(0,1).toUpperCase() 
                                    + user.name.first.substring(1) }}</v-card-title>
        <v-card-text>{{ user.email }}</v-card-text>
        <v-card-text>{{ user.gender }}</v-card-text>
        <v-card-actions>
            <v-layout justify-center>
                <v-btn class="button-download" color="primary">Download profile!</v-btn>
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
.button-download{
    width: 100%;
    overflow: hidden;
}
.img-user{
    width: 100%;
}
.content{
    display: grid;
    grid-template-columns: 22% 22% 22% 22%;
    justify-content: center;
    position: relative;
    top: 50px;
    width: 100%;
}
.card{
    margin: 32px;
}

.title{
    font-size: 16px;
}
</style>

