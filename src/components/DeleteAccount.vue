<template>
  <div class="mx-3">
    <v-dialog v-model="dialog" persistent max-width="320">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="error"
          elevation="5"
          v-bind="attrs"
          v-on="on"
          icon
          large
          ><v-icon>mdi-trash-can</v-icon></v-btn
        >
      </template>
      <v-card>
        <v-card-title class="headline">
          Are you sure you want to delete this account?
        </v-card-title>
        <v-card-text
          >Deleting the account will delete all the account and all transactions
          associated with it. This is an irreversible action.</v-card-text
        >
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="dialog = false">
            Cancel
          </v-btn>
          <v-btn color="error" text @click="deleteAccountAndTransactions"> Delete </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import * as fb from "../utils/firebase"

export default {
  name: "DeleteAccount",
  props: {
    accountId: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      dialog: false,
    };
  },
  methods: {
    async deleteAccountAndTransactions(){
      let transactions = await fb.transactionsCollection.where('accountId', '==', this.$props.accountId).get()

      transactions.forEach(async doc => {
        await fb.transactionsCollection.doc(doc.id).delete()
      })

      await fb.accountsCollection.doc(this.$props.accountId).delete()

      this.dialog = false
    }
  }
};
</script>

<style lang="scss" scoped>
</style>