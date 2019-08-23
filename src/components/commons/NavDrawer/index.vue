<template lang="pug">
  v-navigation-drawer(absolute temporary v-model="isNavDrawerOpen")
    v-list
      v-list-item(v-for="(route, index) in routes" @click="to(route.routeName)" :key="index")
        v-list-item-action
          v-icon {{ route.icon }}
        v-list-item-content
          v-list-item-title {{ route.title }}
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import { navRoutes } from "../../../router/sideNavRoutes";

export default {
  name: "NavDrawer",

  data() {
    return {
      routes: navRoutes
    }
  },

  computed: {
    ...mapGetters("navDrawer", ["isOpen"]),
    
    isNavDrawerOpen: {
      get() {
        return this.isOpen;
      },

      set(value) {
        if (value) {
          this.open();
        } else {
          this.close();
        }
      }
    }
  },

  methods: {
    ...mapMutations("navDrawer", ["open", "close"]),

    to(route) {
      this.$router.push(route);
    }
  },
};
</script>
