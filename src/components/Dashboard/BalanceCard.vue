<template lang="pug">
  DashboardCard(
    title="Balance"
    :value="balanceWithComma"
  )
</template>

<script>
import { mapGetters } from "vuex";
import DashboardCard from "./DashboardCard";
import { addCommas } from "../../utils";

export default {
  name: "BalanceCard",

  components: {
    DashboardCard
  },

  computed: {
    ...mapGetters("transaction", ["balance"]),

    balanceWithComma() {
      return addCommas(this.balance);
    }
  }
};
</script>
