<template>
  <div class="newaccount__container d-flex flex-column justify-center align-center">
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