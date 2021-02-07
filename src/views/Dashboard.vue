<template>
  <div class="dashboard__container px-3">
    <v-row>
      <v-col cols="12" md="6"></v-col>
      <v-col cols="12" md="6">
        <DashSummary />
      </v-col>
      <v-col cols="12">
        <v-row v-if="hasAccounts">
          <v-col cols="12" md="4" :key="account.id" v-for="account in accounts">
            <DashCard :account="account" />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
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
    hasAccounts() {
      if (!this.accounts) {
        return false;
      } else {
        return this.accounts.length > 0;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.dashboard__container {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
}
</style>