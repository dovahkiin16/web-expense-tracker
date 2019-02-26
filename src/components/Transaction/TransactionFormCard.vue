<template lang="pug">
  v-card
    v-card-title Add new Transaction
    v-divider
    v-card-text
      v-form(ref="form" lazy-validation)
        v-text-field(label="Amount" :rules="[required]" type="number" v-model="amount")
        v-select(:items="categories"
            item-value="name"
            :item-text="getItemText"
            label="Category"
            @input="setType"
            :rules="[required]"
            v-model="category")
    v-divider
    v-card-actions
      v-spacer
      v-btn.primary(@click="add") Add
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import { fieldRequired } from "../commons/utils/formRules";
import { categories_array, categories } from "../../config/constants";

export default {
  name: "TransactionFormCard",
  data: function () {
    return {
      categories: categories_array,
    }
  },
  methods: {
    ...mapMutations('transaction', ['setTransactionFormField']),
    required: fieldRequired,
    add: function () {
      if (this.$refs.form.validate()) {
        this.$emit('add');
        this.$refs.form.reset();
      }
    },
    getItemText: function (value) {
      return `${value.name} (${value.type})`
    },
    setType: function (category) {
      if (category === '' || category === undefined) {
        this.setTransactionFormField({field: 'type', value: ''});
        return;
      }
      const categ_upper = category.toUpperCase();
      const value = categories[categ_upper].type;
      this.setTransactionFormField({field: 'type', value: value});
    }
  },
  computed: {
    ...mapGetters('transaction', ['transactionForm']),
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
      set: function (category) {
        this.setTransactionFormField({field: 'category', value: category});
      }
    },
  }
}
</script>

<style scoped>

</style>