<template>
  <v-app-bar
      app
      src="../assets/tinyepicgalaxies.jpg"
      dark
      prominent
      flat
  >
    <v-toolbar-title class="page-title">
      <h3 class="page-name text-uppercase">Game scheduler</h3>
      <span class="text-caption font-weight-light">you can play alone but don't have to!</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <TiltedButton value="Sign out"/>
  </v-app-bar>
</template>


<script>
import TiltedButton from "./TiltedButton";

export default {
  name: 'HorizontalMenu',
  components: {
    TiltedButton
  }
}
</script>

<style scoped>
.page-title {
  background-color: black;
  clip-path: polygon(3% 0%, 100% 0%, 97% 100%, 0% 100%);
  padding: 0 30px;
  opacity: 0.8;
}

.page-name {
  margin-right: 40px;
  display: inline;
}

</style>