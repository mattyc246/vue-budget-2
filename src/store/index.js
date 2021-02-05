import Vue from "vue";
import Vuex from "vuex";
import { UserModule } from "./User";
import { AccountModule } from "./Account"
import * as fb from "../utils/firebase"

fb.accountsCollection.orderBy("createdOn", "asc").onSnapshot((snapshot) => {
  let accountsArray = [];

  snapshot.forEach((doc) => {
    let account = doc.data();
    account.id = doc.id;

    accountsArray.push(account);
  });

  store.commit("Account/setAccounts", accountsArray);
});

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {},

  // Mutations are functions that effect the STATE
  mutations: {},

  // Actions are functions that you caall throughout your application that call mutations
  actions: {},

  modules: {
    User: UserModule,
    Account: AccountModule
  },
});

export default store;
