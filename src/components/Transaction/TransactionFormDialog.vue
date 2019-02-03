<template lang="pug">
  v-dialog(max-width="300" :value="open" @input="close")
    TransactionFormCard(@add="close")
</template>

<script>
import TransactionFormCard from "./TransactionFormCard";

export default {
  name: "TransactionFormDialog",
  props: ['open'],
  components: { TransactionFormCard },
  methods: {
    close: function () {
      this.$emit('close');
    }
  }
}
</script>

<style scoped>

</style>