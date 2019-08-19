<template lang="pug">
  v-card
    v-card-title {{ title }}
    v-divider
    v-card-text.display-3.text-xs-center {{ value }}
</template>

<script>
export default {
  name: "DashboardCard",
  props: {
    title: {
      required: true,
      type: String
    },
    value: {
      required: true,
      type: [String, Number]
    }
  }
};
</script>
