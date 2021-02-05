<template>
  <div>
    <v-app-bar class="px-3" app color="primary">
      <v-btn icon @click="toggleDrawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
      <v-spacer />
      <v-btn icon @click="logout">
        <v-icon>mdi-logout</v-icon>
      </v-btn>
      <v-btn icon @click="toggleDarkMode">
        <v-icon v-if="$vuetify.theme.dark">mdi-lightbulb-on</v-icon>
        <v-icon v-else>mdi-lightbulb-off</v-icon>
      </v-btn>
    </v-app-bar>
    <SideDrawer :drawer.sync="drawer" />
  </div>
</template>

<script>
import SideDrawer from "./SideDrawer";

export default {
  name: "AppBar",
  components: {
    SideDrawer,
  },
  props: {
    drawer: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    toggleDrawer() {
      this.$emit("update:drawer", !this.drawer);
    },
    toggleDarkMode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
    logout() {
      this.$store.dispatch("User/logout");
    },
  },
};
</script>