<template>
  <div class="account-view__container">
    <h1 class="my-5 text-center">Account View</h1>
    <h2
      class="account-view__no-transaction-warning"
      v-if="transactionCount === 0"
    >
      No Transactions Yet!
    </h2>
    <div v-else>
      <v-text-field
        class="account-view__search mx-5"
        v-model="search"
        label="Search"
      ></v-text-field>
      <TransactionTable :transactions="transactions" :search="search" />
    </div>
  </div>
</template>

<script>
import * as fb from "../utils/firebase";
import TransactionTable from "../components/TransactionTable";

export default {
  name: "AccountView",
  components: {
    TransactionTable,
  },
  data() {
    return {
      transactions: [],
      search: "",
    };
  },
  computed: {
    transactionCount() {
      return this.transactions.length;
    },
  },
  mounted() {
    this.fetchTransactions();
  },
  methods: {
    fetchTransactions() {
      const accountId = this.$route.params.id;

      fb.transactionsCollection
        .where("accountId", "==", accountId)
        .onSnapshot((snapshot) => {
          snapshot.forEach((doc) => {
            let transaction = doc.data();
            transaction.id = doc.id;
            console.log(transaction);
            this.transactions.push(transaction);
          });
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.account-view__container {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  position: relative;
}

.account-view__no-transaction-warning {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.account-view__search {
  width: 80%;

  @media screen and (min-width: 960px) {
    width: 50%;
  }
}
</style>