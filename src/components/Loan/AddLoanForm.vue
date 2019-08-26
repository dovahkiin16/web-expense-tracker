<template lang="pug">
  v-card
    v-card-title Track Loan
    v-divider
    v-card-text
      v-form(ref="form" lazy-validation)
        v-text-field(label="Amount" :rules="[required]" type="number" v-model="amount")
        v-text-field(label="From" :rules="[required]" type="text" v-model="name")
    v-divider
    v-card-actions
      v-spacer
      v-btn.primary(@click="add") Add
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import { fieldRequired } from '../commons/utils/formRules';

export default {
  name: 'AddLoanForm',

  methods: {
    ...mapMutations('loans', ['setLoanFormField']),

    required: fieldRequired,

    add() {
      if (this.$refs.form.validate()) {
        this.$emit('add');
      }
    },
  },

  computed: {
    ...mapState('loans', ['loanForm']),

    amount: {
      get() {
        return this.loanForm.amount;
      },

      set(amount) {
        this.setLoanFormField({field: 'amount', value: amount});
      }
    },

    name: {
      get() {
        return this.loanForm.name;
      },

      set(name) {
        this.setLoanFormField({field: 'name', value: name});
      }
    }
  }
}
</script>