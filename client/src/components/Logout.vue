<template>
 <h1>You logged out</h1>
</template>

<script>
export default {
  data () {
    this.$store.dispatch('setToken', null)
    this.$store.dispatch('setUser', null)
    return {
    }
  },
  methods: {
  }
}
</script>

<style scoped>
</style>
