<template>
  <v-container class="dashboard__container">
    <v-row>
      <v-col cols="12" md="6"></v-col>
      <v-col cols="12" md="6">
        <DashSummary />
      </v-col>
      <v-col cols="6" md="4" :key="account.id" v-for="account in accounts">
        <DashCard :account="account" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
import DashCard from "../components/DashCard";
import DashSummary from "../components/DashSummary";

export default {
  name: "Dashboard",
  components: {
    DashCard,
    DashSummary,
  },
  computed: {
    ...mapState("Account", ["accounts"]),
  },
};
</script>

<style lang="scss" scoped>
.dashboard__container {
  height: 100%;
  overflow-y: scroll;
}
</style>