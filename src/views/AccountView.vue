<template>
  <div class="account-view__container">
    <AccountSummary :transactions="transactions" :account="account" />
    <h2 class="text-center my-10" v-if="transactionCount === 0">
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
import AccountSummary from "../components/AccountSummary";

export default {
  name: "AccountView",
  components: {
    TransactionTable,
    AccountSummary,
  },
  data() {
    return {
      transactions: [],
      account: {},
      search: "",
    };
  },
  computed: {
    transactionCount() {
      return this.transactions.length;
    },
  },
  mounted() {
    const accountId = this.$route.params.id;

    this.fetchTransactions(accountId);
    this.fetchAccount(accountId);
  },
  methods: {
    fetchTransactions(accountId) {
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
    fetchAccount(accountId) {
      fb.accountsCollection.doc(accountId).onSnapshot((snapshot) => {
        let account = snapshot.data();
        account.id = snapshot.id;
        this.account = account;
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

.account-view__search {
  width: 80%;

  @media screen and (min-width: 960px) {
    width: 50%;
  }
}
</style>