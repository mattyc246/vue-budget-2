<template>
  <div class="accounts__container pa-5">
    <div class="d-flex justify-center">
      <v-btn to="/accounts/new" class="my-5" color="primary" x-large
        >Add New Account</v-btn
      >
    </div>
    <v-row>
      <v-col cols="6" md="4" :key="account.id" v-for="account in accounts">
        <v-card
          class="pa-5 my-5 d-flex flex-column align-center"
          elevation="10"
          outlined
        >
          <v-icon large color="secondary">{{ account.type }}</v-icon>
          <h3 class="my-5">{{ account.name }}</h3>

          <div class="d-flex align-center">
            <v-btn
              :to="`/accounts/${account.id}`"
              class="mx-3"
              color="success"
              elevation="5"
              icon
              large
              ><v-icon>mdi-eye</v-icon></v-btn
            >
            <v-btn class="mx-3" color="warning" elevation="5" icon large
              ><v-icon>mdi-pencil</v-icon></v-btn
            >
            <v-btn class="mx-3" color="error" elevation="5" icon large
              ><v-icon>mdi-trash-can</v-icon></v-btn
            >
          </div>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "AccountsOverview",
  computed: {
    ...mapState("Account", ["accounts"]),
  },
};
</script>

<style lang="scss" scoped>
.accounts__container {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
}
</style>