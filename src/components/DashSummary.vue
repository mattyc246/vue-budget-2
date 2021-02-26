<template>
  <v-card class="pa-5" elevation="10" outlined>
    <div class="d-flex align-center justify-space-between">
      <h2>Overall Balance:</h2>
      <h2 class="success--text">RM {{ totalBalance | formatCurrency }}</h2>
    </div>
    <v-divider class="my-5"></v-divider>
    <v-row>
      <v-col cols="12" md="4">
        <v-card class="pa-3 text-center" elevation="3" color="primary">
          <h5 class="mb-4">Transaction Count:</h5>
          <h3>{{ totalTransactions }}</h3>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card class="pa-3 text-center" elevation="3" color="error">
          <h5 class="mb-4">Total Outgoing:</h5>
          <h3>RM {{ totalOutgoing | formatCurrency }}</h3>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card class="pa-3 text-center" elevation="3" color="success">
          <h5 class="mb-4">Total Income:</h5>
          <h3>RM {{ totalIncome | formatCurrency }}</h3>
        </v-card>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import * as fb from "../utils/firebase";

export default {
  name: "DashSummary",
  data() {
    return {
      transactions: [],
    };
  },
  mounted() {
    fb.transactionsCollection
      .where("userId", "==", fb.auth.currentUser.uid)
      .onSnapshot((snapshot) => {
        if (snapshot.size > 0) {
          this.transactions = [];

          snapshot.forEach((doc) => {
            let transaction = doc.data();
            transaction.id = doc.id;
            this.transactions.push(transaction);
          });
        } else {
          this.transactions = [];
        }
      });
  },
  computed: {
    totalBalance() {
      let amounts = this.transactions.map((t) => t.amount);

      let sumTotal = amounts.reduce((a, b) => a + b, 0);

      return sumTotal;
    },
    totalTransactions() {
      return this.transactions.length;
    },
    totalOutgoing() {
      let outgoingAmounts = this.transactions
        .filter((t) => t.type === "Outgoing")
        .map((t) => t.amount);

      let sumTotal = outgoingAmounts.reduce((a, b) => a + b, 0);

      return sumTotal;
    },
    totalIncome() {
      let incomeAmounts = this.transactions
        .filter((t) => t.type === "Income")
        .map((t) => t.amount);

      let sumTotal = incomeAmounts.reduce((a, b) => a + b, 0);

      return sumTotal;
    },
  },
  filters: {
    formatCurrency(val) {
      return (val / 100).toFixed(2);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>