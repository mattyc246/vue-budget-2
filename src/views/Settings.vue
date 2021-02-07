<template>
  <div class="settings__container">
    <v-container>
      <v-row>
        <v-col cols="12" md="6">
          <UserProfile />
        </v-col>
        <v-col cols="12" md="6">
          <UpdateProfile />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import UserProfile from "../components/UserProfile"
import UpdateProfile from "../components/UpdateProfile"

export default {
  name: "Settings",
  components: {
    UserProfile,
    UpdateProfile
  }
};
</script>

<style lang="scss" scoped>
.settings__container {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
}
</style>