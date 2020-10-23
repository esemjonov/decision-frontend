<template>
  <div>

    <div>

<v-card>
<li>
  <div>
    <v-icon Green="green"> mdi-cards-diamond</v-icon>
    identityCode: {{ creditscore.status}}
  </div>

</li>

  <div>
    <v-icon color="green"> mdi-currency-eur</v-icon>
    Free money: {{ creditscore.approvedLoanAmount}}
  </div>

  <div>
    <v-icon color="green"> mdi-calendar-alert</v-icon>
    Free money: {{ creditscore.approvedLoanPeriodMonths}}
  </div>

</v-card>



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
