<template lang="pug">
  v-card(dark)
    v-card-text(class="pa-0")
      v-list(dark two-lines)
        v-subheader Transactions
        template(v-for="(item, index) in transactions")
          v-list-tile(:key="index" avatar ripple)
            v-list-tile-content
              v-list-tile-title(:class="getTypeColor(item.type)") {{ getTypeSign(item.type) }}{{ item.amount }}
              v-list-tile-sub-title(class="text-primary") {{ item.category }}
            v-list-tile-action
              v-list-tile-action-text {{ item.date }}
          v-divider(v-if="index + 1 < transactions.length")
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: "TransactionTable",
  data: function () {
    return {
      headers: [
        { text: 'Date', value: 'date' },
        { text: 'Amount', value: 'amount'},
        { text: 'Category', value: 'category'},
      ]
    }
  },
  methods: {
    getTypeColor: function (type) {
      return type === 'credit' ? 'red--text text--lighten-1' : 'light-green--text text--lighten-3';
    },
    getTypeSign: function (type) {
      return type === 'credit' ? '-' : '+';
    }
  },
  computed: {
    ...mapGetters('transaction', ['transactions']),
  }
}
</script>

<style scoped>

</style>