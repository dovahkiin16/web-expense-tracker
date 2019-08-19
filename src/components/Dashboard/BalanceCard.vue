<template lang="pug">
  DashboardCard(
    title="Balance"
    :value="balanceWithComma"
  )
</template>

<script>
import { mapGetters } from "vuex";
import DashboardCard from './DashboardCard';

export default {
  name: "BalanceCard",

  components: {
    DashboardCard,
  },

  computed: {
    ...mapGetters("transaction", ["balance"]),
    
    balanceWithComma() {
      return this.addCommas(this.balance);
    }
  },

  methods: {
    addCommas(value) {
      const valueStr = value.toString();
      const remainder = valueStr.length % 3;
      let result = "";

      if (value === 0) {
        return value;
      }

      if (remainder < 3) {
        result += valueStr.slice(0, remainder);
      }

      for (let i = remainder; i < valueStr.length; i += 3) {
        let toConcat = valueStr.slice(i, i + 3);

        result = result + "," + toConcat;
      }

      return result;
    }
  }
};
</script>
