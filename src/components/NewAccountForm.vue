<template>
  <v-card class="form__card pa-5" elevation="10" outlined>
    <v-form @submit.prevent="handleSubmit">
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
      <div class="d-flex justify-center">
        <v-btn type="submit" color="primary" elevation="10" large>
          Add New Account
        </v-btn>
      </div>
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
      alert(
        `${this.formData.accountName}, ${this.formData.accountType}, ${this.formData.accountCurrency}`
      );

      this.$store.dispatch("Account/createAccount", this.formData);
      this.formData = {
        accountName: "",
        accountType: "",
        accountCurrency: "",
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.form__card {
  width: 90%;

  @media screen and (min-width: 960px) {
    width: 50%;
  }
}
</style>