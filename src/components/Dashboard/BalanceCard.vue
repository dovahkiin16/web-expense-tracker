<template lang="pug">
  v-card
    v-card-title Balance in PHP
    v-divider
    v-card-text.display-3.text-xs-center {{ balance | addCommas }}
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "BalanceCard",
  computed: {
    ...mapGetters("transaction", ["balance"])
  },
  filters: {
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
