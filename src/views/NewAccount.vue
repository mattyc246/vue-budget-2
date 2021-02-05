<template>
  <div class="newaccount__container d-flex flex-column align-center">
    <h1 class="text-center my-5">
      Add New Account
    </h1>
    <NewAccountForm />
  </div>
</template>

<script>
import NewAccountForm from "../components/NewAccountForm";

export default {
  name: "NewAccount",
  components: {
    NewAccountForm,
  },
};
</script>

<style lang="scss" scoped>
.newaccount__container {
  width: 100%;
  height: 100%;
}
</style>