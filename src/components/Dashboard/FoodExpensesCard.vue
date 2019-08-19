<template lang="pug">
  DashboardCard(
    title="Food Expenses"
    :value="foodExpensesWithComma"
  )
</template>

<script>
import { mapGetters } from "vuex";
import DashboardCard from "./DashboardCard";
import { addCommas } from "../../utils";

export default {
  name: "FoodExpensesCard",

  components: {
    DashboardCard
  },

  computed: {
    ...mapGetters("transaction", ["foodExpenses"]),

    foodExpensesWithComma() {
      return addCommas(this.foodExpenses);
    }
  }
};
</script>
