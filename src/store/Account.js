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
    // eslint-disable-next-line no-unused-vars
    async createAccount({ state }, account) {
      await fb.accountsCollection.add({
        createdOn: new Date(),
        name: account.accountName,
        type: account.accountType,
        currency: account.accountCurrency,
        boxColor: account.boxColor,
        userId: fb.auth.currentUser.uid,
      });
    },
    async fetchUserAccounts({ commit }, user) {
      await fb.accountsCollection
        .where("userId", "==", user.uid)
        .orderBy("createdOn", "asc")
        .onSnapshot((docs) => {
          const userAccounts = [];

          docs.forEach((doc) => {
            let account = doc.data();
            account.id = doc.id;
            userAccounts.push(account);
          });

          commit("setAccounts", userAccounts);
        });
    },
    async updateAccount({ dispatch }, account) {
      await fb.accountsCollection.doc(account.id).update({
        name: account.name,
        type: account.type,
        currency: account.currency,
        boxColor: account.boxColor,
      });

      dispatch("fetchUserAccounts", { uid: fb.auth.currentUser.uid });
    },
  },
};
