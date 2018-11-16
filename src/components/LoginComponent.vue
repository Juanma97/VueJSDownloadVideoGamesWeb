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
                <v-text-field class="text-field" prepend-icon="person"></v-text-field>
                <v-text-field class="text-field" prepend-icon="lock"></v-text-field>
                <v-layout class="container-button" justify-center>
                    <v-btn color="primary" class="button">Login</v-btn>
                </v-layout>
            </v-card>
            </v-layout>
        </v-container>
        </v-content>
    </div>
</template>

<script>

export default {
    name: 'LoginComponent',
    components: {
    },
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

