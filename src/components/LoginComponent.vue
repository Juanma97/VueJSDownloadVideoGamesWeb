<template>
    <div class="content">
        <v-content>
        <v-container>
            <v-layout align-center justify-center>
            <v-card width="50%">
                <v-toolbar color="primary">
                    <v-toolbar-title>Login</v-toolbar-title>
                </v-toolbar>
                <v-spacer></v-spacer>
                <v-text-field class="text-field" prepend-icon="person" label="email" v-model="email"></v-text-field>
                <v-text-field class="text-field" type="password" prepend-icon="lock" label="password" v-model="password"></v-text-field>
                <v-layout class="container-button" justify-center>
                    <v-btn color="primary" class="button" @click="signIn">Login</v-btn>
                </v-layout>
            </v-card>
            </v-layout>
        </v-container>
        </v-content>
        <v-progress-circular v-if="login" class="progress" size="64" indeterminate=true></v-progress-circular>
    </div>
</template>

<script>
import firebase from 'firebase';
import database from '@/services/database';

export default {
    name: 'LoginComponent',
    data() {
        return {
            email: '',
            password: '',
            login: false,
        }
    },
    components: {
    },
    methods: {
        async signIn () {
            this.login = true;
            let result = await database.signIn(this.email, this.password);

            if(result.message) {
                this.error = result.message;
                this.login = false
            } else {
                console.log('User is signed in');
                this.$router.push('/');
                this.login = false;
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
.progress{
    position: absolute;
    top: 33%;
    left: 48%;
}
</style>

