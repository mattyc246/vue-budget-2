<template>
  <div class="newaccount__container">
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
  overflow-y: scroll;
}
</style>