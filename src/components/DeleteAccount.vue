<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="290">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          class="mx-3"
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
          <v-btn color="error" text @click="dialog = false"> Delete </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
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
};
</script>

<style lang="scss" scoped>
</style>