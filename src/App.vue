<template lang="pug">
  v-app
    v-app-bar(class="shrink" color="primary" dark)
      v-app-bar-nav-icon(@click="toggle" v-if="loggedIn")
      v-toolbar-title(class="headline text-uppercase")
        span Expense
        span(class="font-weight-light") Tracker
      v-spacer
      v-btn(text icon @click="logoutUser" v-if='loggedIn')
        v-icon logout
    NavDrawer
    v-content
      router-view
</template>

<script>
import NavDrawer from "./components/commons/NavDrawer/index";
import { mapGetters, mapMutations, mapActions, } from "vuex";

export default {
  name: 'App',
  components: { NavDrawer },
  methods: {
    ...mapMutations('navDrawer', ['open', 'close']),
    ...mapActions('account', ['logout']),

    toggle() {
      if (this.isOpen) {
        this.close();
      } else {
        this.open();
      }
    },

    async logoutUser() {
      await this.logout();
      this.$router.push({name: 'login'})
    }
  },
  computed: {
    ...mapGetters('navDrawer', ['isOpen']),
    ...mapGetters('account', ['userId']),
    loggedIn: function () {
      return this.userId !== '';
    }
  }
}
</script>
