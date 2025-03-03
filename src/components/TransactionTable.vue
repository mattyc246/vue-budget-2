<template>
  <v-data-table
    :headers="headers"
    :items="transactions"
    :items-per-page="5"
    :search="search"
    class="elevation-5 mx-5"
  >
    <template v-slot:[`item.id`]="{ item }">
      {{ item.id }}
    </template>
    <template v-slot:[`item.createdOn`]="{ item }">
      {{ item.createdOn | formatDate }}
    </template>
    <template v-slot:[`item.amount`]="{ item }">
      {{ item.amount | formatCurrency }}
    </template>
    <template v-slot:[`item.type`]="{ item }">
      <v-chip :color="item.type === 'Income'
            ? 'success'
            : item.type === 'Transfer In' || item.type === 'Transfer Out'
            ? 'warning'
            : 'error'">
        <v-icon>{{
          item.type === "Income"
            ? "mdi-arrow-bottom-left-thick"
            : item.type === "Transfer In" || item.type === "Transfer Out"
            ? "mdi-arrow-top-right-bottom-left-bold"
            : "mdi-arrow-top-right-thick"
        }}</v-icon>
      </v-chip>
    </template>
    <template v-slot:[`item.actions`]="{ item }">
      <EditTransaction :transaction="item" />
      <DeleteTransaction :transactionId="item.id" />
    </template>
  </v-data-table>
</template>

<script>
import moment from "moment";
import DeleteTransaction from "../components/DeleteTransaction";
import EditTransaction from "../components/EditTransaction";

export default {
  name: "TransactionTable",
  components: {
    DeleteTransaction,
    EditTransaction,
  },
  props: {
    transactions: {
      type: Array,
      required: true,
    },
    search: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      headers: [
        { text: "Description", sortable: false, value: "description" },
        { text: "Type", value: "type" },
        { text: "Amount", value: "amount" },
        { text: "Transaction Date", value: "createdOn" },
        { text: "Actions", value: "actions", sortable: false },
      ],
    };
  },
  filters: {
    formatDate(val) {
      if (!val) {
        return "-";
      }

      let date = val.toDate();
      return moment(date).fromNow();
    },
    formatCurrency(val) {
      return (Math.abs(val) / 100).toFixed(2);
    },
  },
};
</script>

<style lang="scss" scoped>
.table__truncate {
  width: 30px;
  text-overflow: ellipsis;
}
</style>