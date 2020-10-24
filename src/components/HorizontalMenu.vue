<template>
  <v-app-bar
      app
      src="../assets/money_resized.jpg"
      dark
      prominent
      flat
  >
    <v-toolbar-title class="page-title">
      <h3 class="page-name text-uppercase">Inbank test task</h3>
      <span class="text-caption font-weight-light">You can take a loan</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
  </v-app-bar>
</template>

<script>
export default {
  name: 'HorizontalMenu',
  components: {
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