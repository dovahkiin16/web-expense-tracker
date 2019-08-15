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
  data() {
    return {
      categories: categories_array,
    }
  },

  methods: {
    ...mapMutations('transaction', ['setTransactionFormField']),

    required: fieldRequired,

    add() {
      if (this.$refs.form.validate()) {
        this.$emit('add');
        this.$refs.form.reset();
      }
    },

    getItemText(value) {
      return `${value.name} (${value.type})`;
    },

    setType(category) {
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
      get() {
        return this.transactionForm.amount;
      },

      set(value) {
        this.setTransactionFormField({field: 'amount', value: value});
      }
    },

    category: {
      get() {
        return this.transactionForm.category;
      },
      
      set(category) {
        this.setTransactionFormField({field: 'category', value: category});
      }
    },
  }
}
</script>
