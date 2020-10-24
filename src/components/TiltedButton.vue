<template>
  <v-btn :class="{'tilted-button':true, [size]:true}" @click="$emit('click')" :disabled="disabled" depressed text
         dark>
    <v-icon v-if="iconName">{{ iconName }}</v-icon>
    <h3>{{ value }}</h3>
  </v-btn>
</template>

<script>
export default {
  name: "TiltedButton",
  props: {
    value: String,
    iconName: String,
    disabled: {
      default: false,
      type: Boolean
    },
    size: {
      default: 'md',
      type: String
    }
  }
}
</script>

<style scoped>
.tilted-button.tilted-button {
  background-color: black;
  color: white;
  clip-path: polygon(8% 0%, 100% 0%, 92% 100%, 0% 100%);
  padding: 5px 20px !important;
  opacity: 0.8;
  border-radius: unset;
  height: auto !important;
}

.tilted-button:hover {
  opacity: unset;
}

.tilted-button:disabled {
  opacity: 0.6;
}

.tilted-button.disabled > h3 {
  color: white !important;
}

.tilted-button.lg {
  font-size: 2em;
  clip-path: polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%);
}

</style>