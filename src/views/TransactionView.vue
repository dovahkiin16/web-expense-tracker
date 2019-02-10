<template lang="pug">
  div
    v-container
      v-layout
        v-flex
          TransactionTable
    v-btn(fab dark fixed bottom right color="primary" @click="openDialog")
      v-icon add
    TransactionFormDialog(:open="isDialogOpen" @close="closeDialog")
</template>

<script>
import TransactionTable from "../components/Transaction/TransactionTable";
import { mapActions } from 'vuex';
import TransactionFormDialog from "../components/Transaction/TransactionFormDialog";

export default {
  name: "TransactionView",
  components: {TransactionFormDialog, TransactionTable},
  data: function () {
    return {
      isDialogOpen: false
    }
  },
  created: function () {
    this.watchTransactions();
  },
  destroyed: function () {
    this.stopWatchingTransactions();
  },
  methods: {
    ...mapActions('transaction', ['watchTransactions', 'stopWatchingTransactions']),
    openDialog: function () {
      this.isDialogOpen = true;
    },
    closeDialog: function () {
      this.isDialogOpen = false;
    }
  }
}
</script>
