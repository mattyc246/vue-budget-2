import * as fb from "../utils/firebase";
import router from "../router";

export const UserModule = {
  namespaced: true,

  state: {
    userProfile: {},
  },

  // Mutations are functions that effect the STATE
  mutations: {
    setUserProfile(state, val) {
      state.userProfile = val;
    },
  },

  // Actions are functions that you caall throughout your application that call mutations
  actions: {
    async login({ dispatch }, form) {
      const { user } = await fb.auth.signInWithEmailAndPassword(
        form.email,
        form.password
      );

      dispatch("fetchUserProfile", user);
    },
    async logout({ commit }) {
      await fb.auth.signOut();

      commit("setUserProfile", {});
      router.push("/");
    },
    async fetchUserProfile({ commit }, user) {
      const userProfile = await fb.usersCollection.doc(user.uid).get();

      commit("setUserProfile", userProfile.data());

      if (router.currentRoute.path === "/") {
        router.push("/dashboard");
      }
    },
    async updateProfile({ dispatch }, user) {
      const userId = fb.auth.currentUser.uid;

      await fb.usersCollection.doc(userId).update({
        name: user.name,
      });

      dispatch("fetchUserProfile", { uid: userId });
    },
  },
};
