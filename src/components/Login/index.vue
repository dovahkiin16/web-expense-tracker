<template lang="pug">
  v-card
    v-card-title Login
    v-divider
    v-card-text
      p Currently no available email and password login method created
    v-divider
    v-card-actions
      v-btn(@click="loginPopup" color="accent") Google Login
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/auth';
import { mapMutations } from 'vuex';

export default {
  name: "Login",
  created: async function () {
  },
  methods: {
    ...mapMutations('account', ['setUserId']),
    loginPopup: async function () {
      const provider = new firebase.auth.GoogleAuthProvider();
      const result = await firebase.auth().signInWithPopup(provider);
      this.setUserId(result.user.uid);
      this.$router.push({ name: 'transactions' });
    }
  }
}
</script>

<style scoped>

</style>