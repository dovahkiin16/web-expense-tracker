<template lang="pug">
  v-app(dark)
    v-toolbar(app color="primary" dark)
      v-toolbar-title(class="headline text-uppercase")
        span Expense
        span(class="font-weight-light") Tracker
    v-content
      router-view
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      //
    }
  }
}
</script>
