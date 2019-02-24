<template lang="pug">
  v-navigation-drawer(app dark absolute temporary v-model="isNavDrawerOpen")
    v-list
      v-list-tile(@click="toTransactions")
        v-list-tile-action
          v-icon assessment
        v-list-tile-content
          v-list-tile-title List of Transactions
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import { routeNames } from "../../../router/routeNames";

export default {
  name: "NavDrawer",
  computed: {
    ...mapGetters('navDrawer', ['isOpen']),
    isNavDrawerOpen: {
      get: function () {
        return this.isOpen;
      },
      set: function (value) {
        if (value) {
          this.open();
        } else {
          this.close();
        }
      }
    }
  },
  methods: {
    ...mapMutations('navDrawer', ['open', 'close']),
    toTransactions: function () {
      this.$router.push(routeNames.transactions);
    }
  }
}
</script>
