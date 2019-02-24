<template lang="pug">
  v-card
    v-card-title Balance in PHP
    v-divider
    v-card-text.display-3.text-xs-center {{ balance }}
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'BalanceCard',
  computed: {
    ...mapGetters('transaction', ['balance'])
  }
}
</script>
