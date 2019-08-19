<template lang="pug">
  v-container(:class="{'pa-0': isDeviceSmall}")
    v-layout(row wrap)
      v-flex(xs12 sm6 md4 lg3)
        balance-card
      v-flex(xs12 sm6 md4 lg3)
        food-expense-card
</template>

<script>
import BalanceCard from "../components/Dashboard/BalanceCard";
import FoodExpensesCard from "../components/Dashboard/DashboardCard";

export default {
  name: "HomeView",

  components: {
    BalanceCard,
    FoodExpensesCard,
  },

  computed: {
    isDeviceSmall() {
      return this.$vuetify.breakpoint.xsOnly;
    }
  }
};
</script>
