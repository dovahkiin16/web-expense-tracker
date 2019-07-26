<template lang="pug">
  v-list-item(ripple)
    v-list-item-content
      v-list-item-title(:class="getTypeColor(item.type)") {{ getTypeSign(item.type) }}{{ item.amount }}
      v-list-item-subtitle(class="text-primary") {{ item.category }}
    v-list-item-action
      v-list-item-action-text {{ item.date }}
</template>

<script>
export default {
  name: "TransactionItem",
  props: ['item'],
  methods: {
    getTypeColor: function (type) {
      return type === 'credit' ? 'red--text text--lighten-1' : 'light-green--text text--lighten-3';
    },
    getTypeSign: function (type) {
      return type === 'credit' ? '-' : '+';
    }
  },
}
</script>

<style scoped>

</style>