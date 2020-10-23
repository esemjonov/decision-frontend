<template>
  <v-app>
    <HorizontalMenu/>
    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>


<script>
import HorizontalMenu from "@/components/HorizontalMenu";

export default {
  name: "App",
  components: {
    HorizontalMenu
  },
  data: () => ({
    tab: null
  }),
};
</script>

<style>
* {
  font-family: 'Lato', sans-serif;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Oswald', sans-serif;
}

</style>