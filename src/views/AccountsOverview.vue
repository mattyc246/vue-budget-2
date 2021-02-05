<template>
  <div class="accounts__container pa-5 d-flex flex-column align-center">
    <h1>Account Overview</h1>
    <v-btn to="/accounts/new" class="my-5" color="primary" x-large>Add New Account</v-btn>
    <v-card
      class="accounts__card pa-5 my-5"
      elevation="10"
      outlined
      :key="account.id"
      v-for="account in accounts"
    >
      <div class="d-flex justify-space-between align-center">
        <div class="d-flex align-center">
          <v-icon large color="secondary">{{ account.type }}</v-icon>
          <h4 class="mx-5">{{ account.name }}</h4>
        </div>
        <div class="d-flex align-center">
          <v-btn :to="`/accounts/${account.id}`" class="mx-3" color="success" elevation="5" icon large
            ><v-icon>mdi-eye</v-icon></v-btn
          >
          <v-btn class="mx-3" color="warning" elevation="5" icon large
            ><v-icon>mdi-pencil</v-icon></v-btn
          >
          <v-btn class="mx-3" color="error" elevation="5" icon large
            ><v-icon>mdi-trash-can</v-icon></v-btn
          >
        </div>
      </div>
    </v-card>
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

.accounts__card {
  width: 100%;

  @media screen and (min-width: 960px){
    width: 60%;
  }
}
</style>