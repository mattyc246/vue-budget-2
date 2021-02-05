<template>
  <v-form @submit.prevent="handleSubmit">
    <v-select
      :items="accounts"
      item-text="name"
      item-value="id"
      label="Account"
      outlined
      v-model="transactionData.accountNo"
    ></v-select>
    <v-select
      :items="transactionType"
      label="Transaction Type"
      outlined
      v-model="transactionData.type"
    ></v-select>
    <v-text-field
      label="Description"
      outlined
      v-model="transactionData.description"
    ></v-text-field>
    <v-text-field
      label="Amount"
      outlined
      readonly
      :value="displayAmount"
    ></v-text-field>
    <v-container class="keypad__container">
      <v-row>
        <v-col :key="key" cols="4" v-for="key in keypad">
          <v-btn
            class="center-button"
            color="secondary"
            @click.stop="handleKeypad(key)"
          >
            {{ key }}
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
    <div class="d-flex justify-center my-5">
      <v-btn type="submit" color="primary" elevation="5" :disabled="formValid"
        >Add Transaction</v-btn
      >
    </div>
  </v-form>
</template>

<script>
import { mapState } from "vuex";
import * as fb from "../utils/firebase";
import router from "../router";

export default {
  name: "TransactionForm",
  data() {
    return {
      transactionData: {
        description: "",
        accountNo: "",
        type: "",
        amount: "0",
      },
      keypad: [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, "del"],
      transactionType: ["Income", "Outgoing"],
    };
  },
  computed: {
    ...mapState("Account", ["accounts"]),
    displayAmount() {
      return (parseInt(this.transactionData.amount) / 100).toFixed(2);
    },
    formValid() {
      const { accountNo, type, amount, description } = this.transactionData;
      const valid =
        accountNo !== "" && type !== "" && description !== "" && amount !== "0";

      return !valid;
    },
  },
  methods: {
    handleKeypad(key) {
      if (key === "del") {
        if (this.transactionData.amount != "0") {
          this.transactionData.amount = this.transactionData.amount.slice(
            0,
            -1
          );
        }
      } else {
        this.transactionData.amount = this.transactionData.amount + key;
      }
    },
    async handleSubmit() {
      const { accountNo, type, amount, description } = this.transactionData;
      await fb.transactionsCollection
        .add({
          createdOn: new Date(),
          accountId: accountNo,
          description: description,
          type: type,
          amount: type === "Income" ? +amount : -amount,
          userId: fb.auth.currentUser.uid,
        })
        .then(() => {
          this.transactionData = {
            description: "",
            accountNo: "",
            type: "",
            amount: "0",
          };
          router.push(`/accounts/${accountNo}`);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.center-button {
  display: block;
  margin: 0 auto;
}

.keypad__container {
  width: 300px;
}
</style>