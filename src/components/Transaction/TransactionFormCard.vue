<template lang="pug">
  v-card
    v-card-title Add new Transaction
    v-divider
    v-card-text
      v-text-field(label="Amount" v-model="form.amount")
      v-text-field(label="Category" v-model="form.category")
      v-radio-group(row v-model="form.type")
        v-radio(label="Credit" value="credit")
        v-radio(label="Debit" value="debit")
    v-divider
    v-card-actions
      v-spacer
      v-btn.primary Add
</template>

<script>
export default {
  name: "TransactionFormCard",
  data: function () {
    return {
      form: {
        amount: 0,
        category: '',
        type: ''
      }
    }
  }
}
</script>

<style scoped>

</style>