<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <div class="elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title dark>Register</v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4 pt-2 pb-2">
        <div class="error" v-html="error" />
          <form name="vue-blog-form" autocomplete="off">
            <v-layout row>
              <v-flex xs12>
                <v-text-field
                  v-model="email"
                  label="Input Email"
                ></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex xs12>
                <v-text-field
                  v-model="password"
                  type="password"
                  autocomplete="new-password"
                  label="Input Password"
                ></v-text-field>
              </v-flex>
            </v-layout>
            <v-btn @click="register" dark class="cyan">Register</v-btn>
          </form>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        console.log(error)
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>
  .error {
    color: red;
  }
</style>