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
                <v-btn  class="button-download" color="primary" @click="downloadProfile(user)">Download profile!</v-btn>
            </v-layout>
        </v-card-actions>
    </v-card>
</div>
</template>

<script>
import axios from 'axios';
import firebase from 'firebase';
import * as jsPDF from 'jspdf';

export default {
    name: 'PersonCard',
    data(){
        return {
            users: [],
            data: false,
        };
    },
    async created(){
        axios.get("https://randomuser.me/api/?results=100", {})
        .then(response => {
            this.users = response.data.results;
            this.data = true;
            this.$emit('person-card:change', this.data);
        })
        .catch(e => {
            console.log("error", e);
        });
    },
    methods: {
        createPDF(user) {
            let pdfName = user.name.first + '_data';
            var doc = new jsPDF();
            doc.text("Nombre: " + user.name.first, 10, 10);
            doc.text("Apellidos: " + user.name.last, 10, 20);
            doc.text("Género: " + user.gender, 10, 30);
            doc.text("Email: " + user.email, 10, 40);
            doc.text("Localización: ", 10, 50);
            doc.text("Calle: " + user.location.street, 20, 60);
            doc.text("Ciudad: " + user.location.city, 20, 70);
            doc.text("Coordenadas: ", 30, 80);
            doc.text("Latitud: " + user.location.coordinates.latitude, 30, 90);
            doc.text("Longitud: " + user.location.coordinates.longitude, 30, 100);
            doc.text("Telefono: " + user.phone, 10, 110);
            doc.save(pdfName + '.pdf');
        },
        getDownloadProfiles() {
            let profilesNumber;
            firebase.database()
            .ref('Users/' + firebase.auth().currentUser.uid)
            .child('downloadProfiles')
            .on('value', (snapshot) => {
                profilesNumber = snapshot.val()
            });
            return profilesNumber + 1;
        },
        downloadProfile(user) {
            if(this.currentUser){
                this.createPDF(user);
                this.updateProfile(this.getDownloadProfiles());
                this.setNewProfileDownload(user);
            }else{
                alert("Debes loguearte para poder descargar");
            }
            
        },
        updateProfile(downloadProfiles) {
            firebase.database().ref('Users')
            .child(firebase.auth().currentUser.uid)
            .update({
                downloadProfiles: downloadProfiles,
            });
        },
        setNewProfileDownload(user) {
            firebase.database().ref('Users')
            .child(firebase.auth().currentUser.uid)
            .child('profilesDownload')
            .push().set({
                name: user.name.first,
                lastname: user.name.last,
                gender: user.gender,
                email: user.email,
                street: user.location.street,
                city: user.location.city,
                latitude: user.location.coordinates.latitude,
                longitude: user.location.coordinates.longitude,
                img: user.picture.large,
                phone: user.phone,
            });
        }
    },
    computed: {
    currentUser() {
        console.log(this.$store.state.currentUser)
      return this.$store.state.currentUser;
    },
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

