<template lang="pug">
  v-app(dark)
    v-toolbar(app color="primary" dark)
      v-toolbar-side-icon(@click="toggle" v-if="loggedin")
      v-toolbar-title(class="headline text-uppercase")
        span Expense
        span(class="font-weight-light") Tracker
    NavDrawer
    v-content
      router-view
</template>

<script>
import NavDrawer from "./components/commons/NavDrawer/index";
import { mapGetters, mapMutations } from "vuex";

export default {
  name: 'App',
  components: { NavDrawer },
  methods: {
    ...mapMutations('navDrawer', ['open', 'close']),
    toggle: function () {
      if (this.isOpen) {
        this.close();
      } else {
        this.open();
      }
    }
  },
  computed: {
    ...mapGetters('navDrawer', ['isOpen']),
    ...mapGetters('account', ['userId']),
    loggedin: function () {
      return this.userId !== '';
    }
  }
}
</script>
