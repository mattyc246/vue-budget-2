import Vue from "vue";
import Vuex from "vuex";
import { UserModule } from "./User";
import { AccountModule } from "./Account";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {},

  // Mutations are functions that effect the STATE
  mutations: {},

  // Actions are functions that you caall throughout your application that call mutations
  actions: {},

  modules: {
    User: UserModule,
    Account: AccountModule,
  },
});

export default store;
