<template lang="pug">
  v-container(:class="{'pa-0': isDeviceSmall}")
    v-layout(row wrap)
      v-flex(xs12 sm6 md4 lg3 )
        BalanceCard
</template>

<script>
import BalanceCard from "../components/Dashboard/BalanceCard";

export default {
  name: "HomeView",
  components: { BalanceCard },
  computed: {
    isDeviceSmall() {
      return this.$vuetify.breakpoint.xsOnly;
    }
  }
};
</script>
