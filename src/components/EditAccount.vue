<template>
  <div class="text-center">
    <v-dialog v-model="dialog" max-width="960">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          class="mx-3"
          color="warning"
          elevation="5"
          v-bind="attrs"
          v-on="on"
          icon
          large
          ><v-icon>mdi-pencil</v-icon></v-btn
        >
      </template>

      <v-card>
        <v-card-title>
          {{ account.name }}
        </v-card-title>
        <v-form @submit.prevent="updateAccount">
          <v-container>
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field
                  label="Account Name"
                  outlined
                  v-model="name"
                ></v-text-field>
                <v-select
                  :items="typeOptions"
                  label="Account Type"
                  item-text="name"
                  item-value="value"
                  outlined
                  v-model="type"
                ></v-select>
                <v-select
                  :items="currencyOptions"
                  label="Currency"
                  item-text="name"
                  item-value="symbol"
                  outlined
                  v-model="currency"
                ></v-select>
              </v-col>
              <v-col cols="12" md="6">
                <v-color-picker
                  class="mx-auto my-5"
                  mode="hexa"
                  hide-inputs
                  dot-size="26"
                  v-model="boxColor"
                ></v-color-picker>
              </v-col>
            </v-row>
          </v-container>
          <v-divider></v-divider>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn type="submit" color="primary" text>Save</v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "EditAccount",
  props: {
    account: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      dialog: false,
      name: "",
      type: "",
      currency: "",
      boxColor: this.$props.account.boxColor,
      typeOptions: [
        { name: "Bank", value: "mdi-bank" },
        { name: "eWallet", value: "mdi-wallet-membership" },
        { name: "Online Account", value: "mdi-account-cash" },
        { name: "Credit", value: "mdi-credit-card" },
      ],
      currencyOptions: [
        { name: "USD", symbol: "$" },
        { name: "EUR", symbol: "€" },
        { name: "GBP", symbol: "£" },
        { name: "MYR", symbol: "RM" },
      ],
    };
  },
  methods: {
    updateAccount() {
      this.$store.dispatch("Account/updateAccount", {
        id: this.$props.account.id,
        name: this.name !== "" ? this.name : this.$props.account.name,
        type: this.type !== "" ? this.type : this.$props.account.type,
        currency:
          this.currency !== "" ? this.currency : this.$props.account.currency,
        boxColor: this.boxColor,
      });

      this.dialog = false;
    },
  },
};
</script>