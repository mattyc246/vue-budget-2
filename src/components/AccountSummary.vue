<template>
  <v-card class="ma-5 pa-10" elevation="10" outlined>
    <v-row>
      <v-col cols="12" md="3">
        <v-card
          class="account-summary__account-info pa-2 d-flex flex-column align-center justify-center"
          elevation="3"
        >
          <v-icon color="primary" x-large>{{ account.type }}</v-icon>
          <h2 class="mx-3">{{ account.name }}</h2>
        </v-card>
      </v-col>
      <v-col cols="12" md="9">
        <h2>Account Summary</h2>
        <v-divider class="my-3"></v-divider>
        <v-row>
          <v-col cols="12" md="3">
            <v-card class="pa-3 text-center" elevation="5">
              <h4 class="secondary--text">Account Balance:</h4>
              <v-divider class="my-2"></v-divider>
              <h3>
                {{ account.currency }} {{ accountBalance | formatCurrency }}
              </h3>
            </v-card>
          </v-col>
          <v-col cols="12" md="3">
            <v-card class="pa-3 text-center" elevation="5">
              <h4 class="secondary--text">Total Transactions:</h4>
              <v-divider class="my-2"></v-divider>
              <h3>{{ transactionCount }}</h3>
            </v-card>
          </v-col>
          <v-col cols="12" md="3">
            <v-card class="pa-3 text-center" elevation="5">
              <h4 class="primary--text">Income Total:</h4>
              <v-divider class="my-2"></v-divider>
              <h3>{{ account.currency }} {{ incomeTotal | formatCurrency }}</h3>
            </v-card>
          </v-col>
          <v-col cols="12" md="3">
            <v-card class="pa-3 text-center" elevation="5">
              <h4 class="error--text">Outgoings Total:</h4>
              <v-divider class="my-2"></v-divider>
              <h3>
                {{ account.currency }} {{ outgoingsTotal | formatCurrency }}
              </h3>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "AccountSummary",
  props: {
    transactions: {
      type: Array,
      required: true,
    },
    account: {
      type: Object,
      required: true,
    },
  },
  computed: {
    transactionCount() {
      return this.transactions.length;
    },
    accountBalance() {
      let amounts = this.transactions.map((t) => {
        return t.amount;
      });

      let sum = amounts.reduce((a, b) => a + b, 0);

      return sum;
    },
    incomeTotal() {
      let amounts = this.transactions
        .filter((t) => t.type == "Income")
        .map((t) => t.amount);

      let sum = amounts.reduce((a, b) => a + b, 0);

      return sum;
    },
    outgoingsTotal() {
      let amounts = this.transactions
        .filter((t) => t.type == "Outgoing")
        .map((t) => t.amount);

      let sum = amounts.reduce((a, b) => a + b, 0);

      return sum;
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
.account-summary__account-info {
  height: 100%;
}
</style>