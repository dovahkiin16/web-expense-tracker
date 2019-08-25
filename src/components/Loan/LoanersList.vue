<template lang="pug">
  v-card(dark)
    v-card-text(class="pa-0")
      v-list(dark two-lines)
        v-subheader Loaners
        v-alert(type="info" :value="noLoaners") Great! You don't have any loans!
        template(v-for="(loaner, index) in loaners")
          loaner-item(:item="loaner")
          v-divider(v-if="index + 1 < loaners.length")
</template>

<script>
import { mapActions, mapState } from 'vuex';
import LoanerItem from './LoanerItem';

export default {
  name: 'LoanersList',

  components: { LoanerItem },

  async created() {
    await this.fetchLoaners();
  },

  methods: {
    ...mapActions('loans', ['fetchLoaners'])
  },

  computed: {
    ...mapState('loans', ['loaners']),
    
    noLoaners() {
      return this.loaners === 0;
    }
  }
}
</script>