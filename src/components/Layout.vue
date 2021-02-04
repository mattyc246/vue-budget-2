<template>
  <div class="layout__container">
    <AppBar :drawer.sync="drawer" v-if="user"/>
    <div class="pa-3 layout__drawer-avoiding-content" :class="drawer ? 'drawer-open' : ''">
      <slot />
    </div>
  </div>
</template>

<script>
import AppBar from "./AppBar.vue";

export default {
  name: "Layout",
  components: {
    AppBar,
  },
  computed: {
    user(){
      return this.$store.state.User.user
    }
  },
  data (){
    return {
      drawer: false
    }
  }
};
</script>

<style lang="scss" scoped>
.layout__container {
  width: 100%;
  height: 100%;
}

.layout__drawer-avoiding-content {
  width: 100%;
  height: 100%;
  overflow-y: scroll;

  &.drawer-open {
    margin-left: 256px;
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  }
}
</style>