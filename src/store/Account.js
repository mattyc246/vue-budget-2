import * as fb from "../utils/firebase";

export const AccountModule = {
  namespaced: true,

  state: {
    accounts: [],
  },

  // Mutations are functions that effect the STATE
  mutations: {
    setAccounts(state, val) {
      state.accounts = val;
    },
  },

  // Actions are functions that you caall throughout your application that call mutations
  actions: {
    async createAccount({ state }, account) {
      console.log(state);
      await fb.accountsCollection.add({
        createdOn: new Date(),
        name: account.accountName,
        type: account.accountType,
        currency: account.accountCurrency,
        userId: fb.auth.currentUser.uid,
      });
    },
    async fetchUserAccounts({commit}, user){
      const userAccounts = []

      const docs = await fb.accountsCollection.where('userId', '==', user.uid).get();

      docs.forEach(doc => {
        let account = doc.data()
        account.id = doc.id
        userAccounts.push(account)
      })

      commit("setAccounts", userAccounts);
    }
  },
};
