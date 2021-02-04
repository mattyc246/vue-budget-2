import Vue from "vue";
import Vuex from "vuex";
import { UserModule } from "./User";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},

  // Mutations are functions that effect the STATE
  mutations: {},

  // Actions are functions that you caall throughout your application that call mutations
  actions: {},

  modules: {
    User: UserModule,
  },
});
