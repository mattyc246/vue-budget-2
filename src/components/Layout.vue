<template>
  <div class="layout__container">
    <AppBar :drawer.sync="drawer" v-if="showNav" />
    <div
      class="pa-3 layout__drawer-avoiding-content"
      :class="drawer ? 'drawer-open' : ''"
    >
      <slot />
    </div>
  </div>
</template>

<script>
import AppBar from "./AppBar.vue";
import { mapState } from "vuex";

export default {
  name: "Layout",
  components: {
    AppBar,
  },
  computed: {
    ...mapState("User", ["userProfile"]),
    showNav() {
      return Object.keys(this.userProfile).length > 0;
    },
  },
  data() {
    return {
      drawer: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.layout__container {
  width: 100%;
  height: 100%;
}

.layout__drawer-avoiding-content {
  width: 100%;
  height: calc(100vh - 56px);
  overflow-y: hidden;

  @media screen and (min-width: 960px){
    height: calc(100vh - 64px);
  }

  &.drawer-open {
    @media screen and (min-width: 960px) {
      width: calc(100% - 256px);
      margin-left: 256px;
      transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    }
  }
}
</style>