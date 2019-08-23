<template lang="pug">
  v-container(:class="{'pa-0': isDeviceSmall}")
    v-layout(row wrap)
      v-flex(xs12)
        
</template>

<script>
export default {
  name: "LoansView",

  computed: {
    isDeviceSmall() {
      return this.$vuetify.breakpoint.xsOnly;
    }
  }
}
</script>