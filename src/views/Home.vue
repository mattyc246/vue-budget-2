<template>
  <div class="home__container d-flex justify-center align-center">
    <v-card
      class="px-5 pb-5 home__card"
      elevation="10"
      outlined
      :loading="submitting"
    >
      <h2 class="text-center mt-5">Sign In</h2>
      <v-form class="mt-5" v-on:submit.prevent="handleSubmit">
        <v-text-field label="Email" outlined v-model="email"></v-text-field>
        <v-text-field
          type="password"
          label="Password"
          outlined
          v-model="password"
        ></v-text-field>
        <div class="d-flex justify-center">
          <v-btn
            type="submit"
            class="mt-5"
            color="primary"
            elevation="5"
            large
            :loading="submitting"
            :disabled="!email || !password ? true : false"
            >Sign In</v-btn
          >
        </div>
      </v-form>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Home",
  data: function () {
    return {
      email: "",
      password: "",
      submitting: false,
    };
  },
  methods: {
    handleSubmit: function () {
      this.submitting = true;
      this.$store.dispatch("User/login", {
        email: this.email,
        password: this.password,
      });
      setTimeout(() => {
        this.submitting = false;
      }, 3000);
    },
  },
};
</script>

<style lang="scss" scoped>
.home__container {
  width: 100%;
  height: 100%;
  padding: 2rem;
}

.home__card {
  width: 90%;

  @media screen and (min-width: 960px) {
    width: 50%;
  }
}
</style>
