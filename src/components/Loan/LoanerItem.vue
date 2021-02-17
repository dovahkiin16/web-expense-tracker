<template lang="pug">
  v-list-item(ripple)
    v-list-item-content
      v-list-item-title {{ item.amount }}
      v-list-item-subtitle.text-primary {{ item.name }}
    v-list-item-action
      v-btn(text @click="pay") Pay
</template>

<script>
export default {
  name: "LoanerItem",

  props: ["item"],

  methods: {
    pay() {
      this.$emit('pay', 'testing');
    }
  }
}
</script>