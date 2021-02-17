<template lang="pug">
  v-dialog(max-width="300" :value="open" @input="close")
    add-loan-form(@add="save")
</template>

<script>
import AddLoanForm from './AddLoanForm';
import { mapActions, mapMutations } from 'vuex';

export default {
  name: 'AddLoanDialog',

  props: ['open'],

  components: { AddLoanForm },

  methods: {
    ...mapActions('loans', ['addLoan']),
    ...mapMutations('loans', ['clearLoanForm']),

    close() {
      this.$emit('close');
    },

    async save() {
      await this.addLoan();
      this.clearLoanForm();
      this.close();
    },
  }
}
</script>