<template>
  <v-data-table
    :headers="headers"
    :items="transactions"
    :items-per-page="5"
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
      <v-chip :color="item.type === 'Income' ? 'primary' : 'error'">
        <v-icon>{{
          item.type === "Income"
            ? "mdi-arrow-bottom-left-thick"
            : "mdi-arrow-top-right-thick"
        }}</v-icon>
      </v-chip>
    </template>
  </v-data-table>
</template>

<script>
import moment from "moment";

export default {
  name: "TransactionTable",
  props: {
    transactions: {
      type: Array,
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
        {
          text: "ID",
          align: "start",
          sortable: false,
          value: "id",
        },
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