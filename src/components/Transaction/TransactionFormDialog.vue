<template lang="pug">
  v-dialog(max-width="300" :value="open" @input="close")
    TransactionFormCard(@add="save")
</template>

<script>
import TransactionFormCard from "./TransactionFormCard";
import { mapActions } from 'vuex';

export default {
  name: "TransactionFormDialog",
  props: ['open'],
  components: { TransactionFormCard },
  methods: {
    ...mapActions('transaction', ['addTransaction']),
    close: function () {
      this.$emit('close');
    },
    save: async function () {
      this.addTransaction();
      this.close();
    }
  }
}
</script>

<style scoped>

</style>