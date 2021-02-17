<template lang="pug">
  div
    v-container(:class="{'pa-0': isDeviceSmall}")
      v-layout(row wrap)
        v-flex(xs12)
          loaners-list
    v-btn(fab dark fixed bottom right color="primary" @click="openDialog")
      v-icon add
    add-loan-dialog(:open="isDialogOpen" @close="closeDialog")
</template>

<script>
import LoanersList from '../components/Loan/LoanersList';
import AddLoanDialog from '../components/Loan/AddLoanDialog';

export default {
  name: 'LoansView',

  components: {
    LoanersList,
    AddLoanDialog,
  },

  data() {
    return {
      isDialogOpen: false,
    }
  },

  computed: {
    isDeviceSmall() {
      return this.$vuetify.breakpoint.xsOnly;
    }
  },

  methods: {
    openDialog() {
      this.isDialogOpen = true;
    },

    closeDialog() {
      this.isDialogOpen = false;
    }
  }
}
</script>