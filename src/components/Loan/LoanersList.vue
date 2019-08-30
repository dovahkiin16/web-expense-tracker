<template lang="pug">
  v-card(dark)
    v-card-text(class="pa-0")
      pay-loan-dialog(:open="isDialogOpen", @close="closeDialog")
      v-list(dark two-lines)
        v-subheader Loaners
        v-alert(type="info" :value="noLoaners") Great! You don't have any loans!
        template(v-for="(loaner, index) in loaners")
          loaner-item(:item="loaner" @pay="pay")
          v-divider(v-if="index + 1 < loaners.length")
</template>

<script>
import { mapActions, mapState } from 'vuex';
import LoanerItem from './LoanerItem';
import PayLoanDialog from './PayLoanDialog';

export default {
  name: 'LoanersList',

  components: { 
    LoanerItem,
    PayLoanDialog,
  },

  data() {
    return {
      isDialogOpen: false,
    }
  },

  async created() {
    await this.fetchLoaners();
  },

  methods: {
    ...mapActions('loans', ['fetchLoaners']),

    openDialog() {
      this.isDialogOpen = true;
    },

    closeDialog() {
      this.isDialogOpen = false;
    },

    pay(name) {
      this.loanForm.name = name;
      this.openDialog();
    },
  },

  computed: {
    ...mapState('loans', ['loaners', 'loanForm']),
    
    noLoaners() {
      return this.loaners === 0;
    }
  }
}
</script>