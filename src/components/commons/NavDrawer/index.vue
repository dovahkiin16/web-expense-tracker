<template lang="pug">
  v-navigation-drawer(absolute temporary v-model="isNavDrawerOpen")
    v-list
      v-list-item(@click="toHome")
        v-list-item-action
          v-icon home
        v-list-item-content
          v-list-item-title Home
      v-list-item(@click="toTransactions")
        v-list-item-action
          v-icon assessment
        v-list-item-content
          v-list-item-title List of Transactions
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import { routeNames } from "../../../router/routeNames";

export default {
  name: "NavDrawer",
  computed: {
    ...mapGetters("navDrawer", ["isOpen"]),
    isNavDrawerOpen: {
      get() {
        return this.isOpen;
      },
      set(value) {
        if (value) {
          this.open();
        } else {
          this.close();
        }
      }
    }
  },
  methods: {
    ...mapMutations("navDrawer", ["open", "close"]),
    toTransactions() {
      this.$router.push(routeNames.transactions);
    },
    toHome() {
      this.$router.push(routeNames.home);
    }
  }
};
</script>
