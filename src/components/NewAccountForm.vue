<template>
  <v-card class="pa-5" elevation="10" outlined>
    <v-form @submit.prevent="handleSubmit">
      <v-row>
        <v-col cols="12" md="6">
          <v-text-field
            label="Account Name"
            outlined
            v-model="formData.accountName"
          ></v-text-field>
          <v-select
            :items="typeOptions"
            label="Account Type"
            item-text="name"
            item-value="value"
            outlined
            v-model="formData.accountType"
          ></v-select>
          <v-select
            :items="currencyOptions"
            label="Currency"
            item-text="name"
            item-value="symbol"
            outlined
            v-model="formData.accountCurrency"
          ></v-select>
          <p class="mb-5">
            You can set the box color otherwise it will follow the default. Test
            dark and light mode.
          </p>
          <div class="d-flex justify-center">
            <v-btn type="submit" color="primary" elevation="10" large>
              Add New Account
            </v-btn>
          </div>
        </v-col>
        <v-col cols="12" md="6">
          <v-card
            class="pa-5 form__preview mx-auto"
            :color="formData.boxColor"
            elevation="5"
          >
            <div class="d-flex flex-column align-center justify-center">
              <v-icon>mdi-bank</v-icon>
              <h3 class="my-5">Account Name</h3>
              <h2 class="primary--text">RM 1000.000</h2>
            </div>
          </v-card>
          <v-color-picker
            class="mx-auto my-5"
            mode="hexa"
            hide-inputs
            dot-size="26"
            v-model="formData.boxColor"
          ></v-color-picker>
        </v-col>
      </v-row>
    </v-form>
  </v-card>
</template>

<script>
export default {
  name: "NewAccountForm",
  data() {
    return {
      formData: {
        accountName: "",
        accountType: "",
        accountCurrency: "",
        boxColor: "#1E1E1E",
      },
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
    handleSubmit() {
      this.$store.dispatch("Account/createAccount", this.formData);
      this.formData = {
        accountName: "",
        accountType: "",
        accountCurrency: "",
        boxColor: "#1E1E1E"
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.form__preview {
  width: 50%;
}
</style>