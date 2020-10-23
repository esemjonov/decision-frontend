<template>
  <div>

    <div>
      <v-row>

        <div>
          <v-icon Green="green"> mdi-cards-diamond</v-icon>
          identityCode: {{ creditscore.status}}
        </div>
        <div>
          <v-icon color="green"> mdi-currency-eur</v-icon>
          Free money: {{ creditscore.approvedLoanAmount}}
        </div>

        <div>
          <v-icon color="green"> mdi-currency-eur</v-icon>
          Free money: {{ creditscore.approvedLoanPeriodMonths}}
        </div>

      </v-row>
    </div>

  </div>
</template>

<script>

export default {
  name: "CreditListItem",
  props: {
    creditscore: Object,
  }

}

</script>
