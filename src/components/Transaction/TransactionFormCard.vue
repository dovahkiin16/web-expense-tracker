<template lang="pug">
  v-card
    v-card-title Add new Transaction
    v-divider
    v-card-text
      v-form(ref="form" lazy-validation)
        v-text-field(label="Amount" :rules="[required]" type="number" v-model="amount")
        v-text-field(label="Category" :rules="[required]" v-model="category")
        v-radio-group(row v-model="type" :rules="[required]")
          v-radio(label="Credit" value="credit")
          v-radio(label="Debit" value="debit")
    v-divider
    v-card-actions
      v-spacer
      v-btn.primary(@click="add") Add
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import { fieldRequired } from "../commons/utils/formRules";

export default {
  name: "TransactionFormCard",
  methods: {
    ...mapMutations(['setTransactionFormField']),
    required: fieldRequired,
    add: function () {
      if (this.$refs.form.validate()) {
        this.$emit('add');
      }
    }
  },
  computed: {
    ...mapGetters(['transactionForm']),
    amount: {
      get: function () {
        return this.transactionForm.amount;
      },
      set: function (value) {
        this.setTransactionFormField({field: 'amount', value: value});
      }
    },
    category: {
      get: function () {
        return this.transactionForm.category;
      },
      set: function (value) {
        this.setTransactionFormField({field: 'category', value: value});
      }
    },
    type: {
      get: function () {
        return this.transactionForm.type;
      },
      set: function (value) {
        this.setTransactionFormField({field: 'type', value: value});
      }
    }
  }
}
</script>

<style scoped>

</style>