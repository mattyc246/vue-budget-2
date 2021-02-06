<template>
  <v-dialog v-model="dialog" persistent max-width="600">
    <template v-slot:activator="{ on, attrs }">
      <v-icon v-bind="attrs" v-on="on" small> mdi-delete </v-icon>
    </template>
    <v-card>
      <v-card-title class="headline">
        Are you sure you want to delete the transaction?
      </v-card-title>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" text @click="dialog = false"> Cancel </v-btn>
        <v-btn color="primary" text @click="deleteTransaction"> Confirm </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import * as fb from "../utils/firebase";

export default {
  name: "DeleteTransaction",
  data() {
    return {
      dialog: false,
    };
  },
  props: {
    transactionId: {
      type: String,
      required: true,
    },
  },
  methods: {
    async deleteTransaction() {
      await fb.transactionsCollection.doc(this.$props.transactionId).delete();

      this.dialog = false;
    },
  },
};
</script>