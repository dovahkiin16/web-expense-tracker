<template lang="pug">
  v-container(:class="{'pa-0': isDeviceSmall}")
    v-layout(row wrap)
      v-flex(xs12)
        loaners-list
</template>

<script>
import LoanersList from "../components/Loan/LoanersList";

export default {
  name: "LoansView",

  components: { LoanersList },

  computed: {
    isDeviceSmall() {
      return this.$vuetify.breakpoint.xsOnly;
    }
  }
}
</script>