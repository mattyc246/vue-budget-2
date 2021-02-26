<template>
  <span>
    <v-dialog v-model="dialog">
      <template v-slot:activator="{ on, attrs }">
        <v-icon small class="mr-2" v-bind="attrs" v-on="on">
          mdi-pencil
        </v-icon>
      </template>

      <v-card>
        <v-card-title class="headline"> Update Transaction </v-card-title>
        <v-form @submit.prevent="updateTransaction">
          <div class="px-5">
            <v-container>
              <v-row>
                <v-col cols="12" md="6">
                  <v-select
                    :items="transactionType"
                    label="Transaction Type"
                    outlined
                    v-model="type"
                  ></v-select>
                  <v-text-field
                    label="Description"
                    outlined
                    v-model="description"
                  ></v-text-field>
                  <v-text-field
                    label="Amount"
                    outlined
                    readonly
                    :value="displayAmount"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-row class="px-5">
                    <v-col :key="key" cols="4" v-for="key in keypad">
                      <div class="d-flex justify-center">
                        <v-btn
                          class="center-button"
                          color="secondary"
                          @click.stop="handleKeypad(key)"
                        >
                          {{ key }}
                        </v-btn>
                      </div>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-container>
          </div>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn type="submit" color="primary" text>Save</v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
  </span>
</template>

<script>
import { mapState } from "vuex";
import * as fb from "../utils/firebase";

export default {
  name: "EditTransaction",
  props: {
    transaction: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      dialog: false,
      description: "",
      type: "",
      amount: "0",
      keypad: [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, "del"],
      transactionType: ["Income", "Outgoing", "Transfer In", "Transfer Out"],
    };
  },
  methods: {
    async updateTransaction() {
      await fb.transactionsCollection.doc(this.$props.transaction.id).update({
        description:
          this.description !== ""
            ? this.description
            : this.$props.transaction.description,
        type: this.type !== "" ? this.type : this.$props.transaction.type,
        amount:
          this.amount !== "0" ? this.type === this.amount : this.$props.transaction.amount,
      });

      this.dialog = false;
    },
    handleKeypad(key) {
      if (key === "del") {
        if (this.amount != "0") {
          this.amount = this.amount.slice(0, -1);
        }
      } else {
        this.amount = this.amount + key;
      }
    },
  },
  computed: {
    ...mapState("Account", ["accounts"]),
    displayAmount() {
      return (parseInt(this.amount) / 100).toFixed(2);
    },
  },
};
</script>