<template lang="pug">
  v-card(dark)
    v-card-title
      h3 Transaction list
    v-divider
    v-card-text
      v-data-table(
        :headers="headers"
        :items="transactions"
        dark)
        template(#items="props")
          td {{ props.item.date }}
          td(:class="getTypeColor(props.item.type)") {{ getTypeSign(props.item.type) }} {{ props.item.amount }}
          td {{ props.item.category }}
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