<template>
  <div class="newtransaction__container d-flex flex-column align-center">
    <h1 class="my-5">Add Transaction</h1>
    <v-card class="pa-5 newtransaction__card" elevation="10" outlined>
      <NewTransactionForm />
    </v-card>
  </div>
</template>

<script>
import NewTransactionForm from "../components/NewTransactionForm";

export default {
  name: "NewTransaction",
  components: {
    NewTransactionForm,
  },
};
</script>

<style lang="scss" scoped>
.newtransaction__container {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
}

.newtransaction__card {
  width: 90%;

  @media screen and (min-width: 960px) {
    width: 50%;
  }
}
</style>