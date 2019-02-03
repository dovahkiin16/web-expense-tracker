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
        template(slot="items" slot-scope="props")
          td(v-for="header in headers") {{ props.item[header.value] }}
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
        { text: 'Type', value: 'type'}
      ]
    }
  },
  computed: {
    ...mapGetters(['transactions'])
  }
}
</script>

<style scoped>

</style>