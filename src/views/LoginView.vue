<template lang="pug">
  v-container
    v-layout(align-center justify-center fill-height row)
      v-flex(xl4 lg6 md7 sm9 xs12)
        Login
</template>

<script>
import Login from "../components/Login/index";
export default {
  name: "LoginView",
  components: { Login }
}
</script>

<style scoped>

</style>