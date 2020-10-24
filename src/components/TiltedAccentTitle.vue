<template>
  <div class="tilted-accent-title">
    <v-icon v-if="iconName">{{ iconName }}</v-icon>
    <h3>{{ value }}</h3>
  </div>
</template>

<script>
export default {
  name: "TiltedAccentTitle",
  props: {
    value: String,
    iconName: String
  }
}
</script>

<style scoped>

.tilted-accent-title {
  background-color: black;
  color: white;
  clip-path: polygon(8% 0%, 100% 0%, 92% 100%, 0% 100%);
  padding: 5px 20px !important;
  opacity: 0.8;
  border-radius: unset;
  height: auto !important;
}

</style>