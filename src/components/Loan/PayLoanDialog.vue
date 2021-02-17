<template lang="pug">
  v-dialog(max-width="300" :value="open" @input="close")
    pay-loan-form
</template>

<script>
import PayLoanForm from './PayLoanForm';

export default {
  name: 'PayLoanDialog',

  props: ['open'],

  components: { PayLoanForm },

  methods: {
    close() {
      this.$emit('close');
    }
  }
}
</script>