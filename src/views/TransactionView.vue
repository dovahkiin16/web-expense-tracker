<template lang="pug">
  div
    v-container
      v-layout
        v-flex
          TransactionTable
    v-btn(fab dark fixed bottom right color="primary")
      v-icon add
</template>

<script>
import TransactionTable from "../components/Transaction/TransactionTable";
import { mapActions } from 'vuex';

export default {
  name: "TransactionView",
  components: {TransactionTable},
  created: function () {
    this.watchTransactions();
  },
  destroyed: function () {
    this.stopWatchingTransactions();
  },
  methods: {
    ...mapActions(['watchTransactions', 'stopWatchingTransactions'])
  }
}
</script>
