<template>
  <v-card
      class="mx-auto customer-card"
      color="black"
      dark
      max-width="300"
  >
    <v-card-title class="customer-card-title">
      {{customer.identityCode}}
    </v-card-title>
    <v-card-text class="customer-body">
      <ul class="customer-details-list">
        <li>
          <v-icon color="green"> mdi-currency-eur</v-icon>
          Free money: {{customer.creditModifier}}
        </li>
      </ul>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "CustomerListItem",
  props: {
    customer: Object,
  }
}
</script>


<style scoped>

.customer-card {
  display: block;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
}

.customer-card-title {
  word-break: unset;
}

.customer-details-list {
  list-style-type: none;
}
</style>