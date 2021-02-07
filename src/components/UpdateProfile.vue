<template>
  <v-form
    class="d-flex flex-column align-center"
    @submit.prevent="updateProfile"
  >
    <h2 class="my-5">Update Details</h2>
    <v-text-field
      class="update__text-field"
      label="Name"
      :placeholder="userProfile.name"
      v-model="name"
      outlined
    ></v-text-field>
    <v-btn type="submit" color="primary" large>Submit</v-btn>
  </v-form>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "UpdateProfile",
  data() {
    return {
      name: "",
    };
  },
  computed: {
    ...mapState("User", ["userProfile"]),
  },
  methods: {
    updateProfile() {
      this.$store.dispatch("User/updateProfile", {
        name: this.name !== "" ? this.name : this.userProfile.name,
      });

      this.name = "";
    },
  },
};
</script>

<style lang="scss" scoped>
.update__text-field {
  width: 100%;
}
</style>