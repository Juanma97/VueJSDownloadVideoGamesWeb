<template>
    <div class="content">
        <v-content>
        <v-container>
            <v-layout align-center justify-center>
            <v-card width="50%">
                <v-toolbar color="primary">
                    <v-toolbar-title>Register</v-toolbar-title>
                </v-toolbar>
                <v-spacer></v-spacer>
                <v-text-field class="text-field" prepend-inner-icon="person" clearable label="name"></v-text-field>
                <v-text-field class="text-field" prepend-inner-icon="email" clearable label="email" v-model="email"></v-text-field>
                <v-text-field class="text-field" prepend-inner-icon="lock" clearable label="password" v-model="password"></v-text-field>
                <v-layout class="container-button" justify-center>
                    <v-btn color="primary" class="button" @click="signUp">Register</v-btn>
                </v-layout>
            </v-card>
            </v-layout>
        </v-container>
        </v-content>
    </div>
</template>

<script>
import firebase from 'firebase';
import database from '@/services/database';

export default {
    name: 'RegisterComponent',
    data() {
        return {
            email: '',
            password: '',
        }
    },
    methods: {
        async signUp () {
            let result = await database.signUp(this.email, this.password);

            if(result.message) {
                this.error = result.message;
            } else {
                console.log('User is created');
                this.$router.push('/');
            }
        }
    }
}
</script>

<style scoped>
.text-field{
    margin: 16px 32px 0 32px;
}
.container-button{
    margin: 32px;
}
.button{
    width: 100%;
}
</style>


