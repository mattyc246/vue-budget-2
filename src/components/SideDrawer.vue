<template>
  <v-navigation-drawer
    v-model="drawer"
    absolute
    bottom
    temporary
    stateless
    hide-overlay
    mobile-breakpoint="960px"
  >
    <v-list>
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/15.jpg"></v-img>
        </v-list-item-avatar>
      </v-list-item>

      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title"> {{ name }} </v-list-item-title>
          <v-list-item-subtitle> {{ email }} </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list nav dense>
      <v-list-item v-bind:key="index" :to="item.to" v-for="(item, index) in items" exact>
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapState } from 'vuex';
import { auth } from "../utils/firebase"

export default {
  name: "SideDrawer",
  props: {
    drawer: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    ...mapState('User', ['userProfile']),
    name(){
      return this.userProfile.name
    },
    email(){
      return auth.currentUser.email
    }
  },
  data() {
    return {
      items: [
        { title: "Overview", to: "/dashboard", icon: "mdi-view-dashboard" },
        { title: "My Accounts", to:"/accounts", icon: "mdi-wallet" },
        { title: "Add Account", to:"/accounts/new", icon: "mdi-wallet-plus" },
        { title: "Add Transaction", to:"/transactions/new", icon: "mdi-credit-card-plus" },
      ],
      right: null,
    };
  },
};
</script>