<template lang="pug">
  v-card(dark)
    v-card-text(class="pa-0")
      v-list(dark two-lines)
        v-subheader Transactions
        v-alert(type="info" :value="noTransaction") There is no transactions recorded
        template(v-for="(item, index) in transactions")
          TransactionItem(:item="item")
          v-divider(v-if="index + 1 < transactions.length")
</template>

<script>
import { mapGetters } from 'vuex';
import TransactionItem from './TransactionItem';

export default {
  name: "TransactionList",
  components: { TransactionItem },
  methods: {
  },
  computed: {
    ...mapGetters('transaction', ['transactions']),
    noTransaction: function () {
      return this.transactions.length === 0;
    }
  }
}
</script>

<style scoped>

</style>