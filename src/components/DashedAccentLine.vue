<template>
  <div class="dashed-accent-line">
    <div class="line"></div>
    <slot></slot>
    <div class="line"></div>
  </div>
</template>

<script>
export default {
  name: "DashedAccentLine"
}
</script>

<style scoped>
.dashed-accent-line {
  display: flex;
  align-items: center;
  padding: 30px 0;
  width: 100%;
}

.line {
  flex: 1 0 auto;
  background-image: linear-gradient(90deg, transparent, transparent 50%, red 50%, red 100%);
  background-size: 10px;
  height: 2px;
  background-repeat: repeat-x;
}
</style>