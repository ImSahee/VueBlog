<template>
    <v-toolbar fixed class="cyan">
        <v-toolbar-title class="mr-4">
            <span class="home" @click="navigateTo('index')">
            VueBlog
            </span>
        </v-toolbar-title>
       <!-- <v-toolbar-items>
            <v-btn flat dark>
                Posts
            </v-btn>
        </v-toolbar-items>-->
        <v-spacer></v-spacer>
        <v-toolbar-items>

            <v-btn 
                v-if="!$store.state.isUserLoggedIn"
                flat 
                dark 
                to="login">
                Log in
            </v-btn>
            
            <v-btn 
                v-if="$store.state.isUserLoggedIn"
                flat 
                dark 
                to="logout">
                Log out
            </v-btn>
            
            <v-btn 
                v-if="!$store.state.isUserLoggedIn"
                flat 
                dark 
                to="register">
                Register
            </v-btn>

        </v-toolbar-items>
        
    </v-toolbar>
</template>

<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push({name: route})
    }
  }
}
</script>

<style scoped>
.home{
    cursor: pointer;
    color:white;
}
.home:hover {
    color:black;
}
</style>