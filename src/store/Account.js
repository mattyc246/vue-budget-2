import * as fb from "../utils/firebase";

export const AccountModule = {
  namespaced: true,

  state: {
    accounts: [],
  },

  // Mutations are functions that effect the STATE
  mutations: {

  },

  // Actions are functions that you caall throughout your application that call mutations
  actions: {
    async createAccount(account){
      await fb.accountsCollection.add({
        createdOn: new Date(),
        name: account.accountName,
        type: account.accountType,
        currency: account.accountCurrency,
        userId: fb.auth.currentUser.uid
      })
    }
  }
};
