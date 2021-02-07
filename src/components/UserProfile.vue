<template>
  <v-card class="pa-5" elevation="10" outlined>
    <div class="d-flex flex-column align-center">
      <v-img
        src="https://picsum.photos/300"
        lazy-src="https://picsum.photos/50"
        max-width="300"
      >
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular
              indeterminate
              color="grey lighten-5"
            ></v-progress-circular>
          </v-row>
        </template>
      </v-img>
      <h2 class="my-5">{{ userProfile.name }}</h2>
      <h4>{{ email }}</h4>
      <h4 class="my-5">
        Accounts: <span class="secondary--text">{{ accountCount }}</span>
      </h4>
    </div>
  </v-card>
</template>

<script>
import { mapState } from "vuex";
import { auth } from "../utils/firebase";

export default {
  name: "UserProfile",
  computed: {
    ...mapState("User", ["userProfile"]),
    ...mapState("Account", ["accounts"]),
    email() {
      return auth.currentUser.email;
    },
    accountCount() {
      return this.accounts.length;
    },
  },
};
</script>