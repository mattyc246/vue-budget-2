<template>
  <v-card
    :to="`/accounts/${account.id}`"
    class="pa-5 d-flex flex-column align-center justify-center"
    elevation="10"
    outlined
  >
    <v-icon class="mb-5">{{ account.type }}</v-icon>
    <h4>{{ account.name }}</h4>
    <h3 class="my-5">Balance:</h3>
    <h2 class="primary--text">
      {{ account.currency }} {{ totalBalance | formatCurrency }}
    </h2>
  </v-card>
</template>

<script>
import * as fb from "../utils/firebase";

export default {
  name: "DashCard",
  data() {
    return {
      transactions: [],
    };
  },
  props: {
    account: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    fb.transactionsCollection
      .where("accountId", "==", this.account.id)
      .onSnapshot((snapshot) => {
        snapshot.forEach((doc) => {
          let transaction = doc.data();
          transaction.id = doc.id;
          this.transactions.push(transaction);
        });
      });
  },
  computed: {
    totalBalance() {
      let amounts = this.transactions.map((t) => t.amount);

      let sumTotal = amounts.reduce((a, b) => a + b, 0);

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