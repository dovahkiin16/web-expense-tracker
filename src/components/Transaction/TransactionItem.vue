<template lang="pug">
  v-list-tile(avatar ripple)
    v-list-tile-content
      v-list-tile-title(:class="getTypeColor(item.type)") {{ getTypeSign(item.type) }}{{ item.amount }}
      v-list-tile-sub-title(class="text-primary") {{ item.category }}
    v-list-tile-action
      v-list-tile-action-text {{ item.date }}
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