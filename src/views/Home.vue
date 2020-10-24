<template>
  <section>
    <v-app-bar flat color="#FEE616">
      <TiltedAccentTitle :value="'Customers'.toUpperCase()"></TiltedAccentTitle>
    </v-app-bar>
    <v-card>
      <CustomerList></CustomerList>
    </v-card>
    <NewCreditScoreForm activator="#new-credit-score-modal-activator"></NewCreditScoreForm>
  </section>
</template>

<script>
import CustomerList from "../components/CustomerList";
import NewCreditScoreForm from "../components/NewCreditScoreForm";
import TiltedAccentTitle from "@/components/TiltedAccentTitle";

export default {
  name: "Home",
  components: {
    TiltedAccentTitle,
    CustomerList,
    NewCreditScoreForm
  }
}
</script>

<style scoped>

.center {
  text-align: center;
}

</style>