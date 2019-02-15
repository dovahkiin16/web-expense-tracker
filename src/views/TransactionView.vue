<template lang="pug">
  div
    v-container(fluid :class="{'pa-0': isDeviceSmall}")
      v-layout
        v-flex(sm8 offset-sm2 md6 offset-md3 lg4 offset-lg4)
          TransactionTable
    v-btn(fab dark fixed bottom right color="primary" @click="openDialog")
      v-icon add
    TransactionFormDialog(:open="isDialogOpen" @close="closeDialog")
</template>

<script>
import TransactionTable from "../components/Transaction/TransactionList";
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
  },
  computed: {
    isDeviceSmall: function () {
      return this.$vuetify.breakpoint.xsOnly;
    }
  }
}
</script>
