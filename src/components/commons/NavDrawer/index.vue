<template lang="pug">
  v-navigation-drawer(absolute temporary v-model="isNavDrawerOpen")
    v-list
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
      get: function() {
        return this.isOpen;
      },
      set: function(value) {
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
    toTransactions: function() {
      this.$router.push(routeNames.transactions);
    }
  }
};
</script>
