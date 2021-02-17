<template lang="pug">
  v-card
    v-card-title Pay {{ loanForm.name }}
    v-divider
    v-card-text
      v-form(ref="form" lazy-validation)
        v-text-field(label="Amount" :rules="[required]" type="number" v-model="loanForm.amount")
    v-divider
    v-card-actions
      v-spacer
      v-btn.primary(@click="pay") Pay
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'PayLoanForm',

  data() {
    return {
      amount: 0,
    }
  },

  computed: {
    ...mapState('loans', ['loanForm'])
  },

  methods: {
    ...mapActions('loans', ['payLoan']),

    async pay() {
      await this.payLoan();
    }
  }
}
</script>