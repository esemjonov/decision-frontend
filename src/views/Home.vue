<template>
  <section>


    <div class="center">CUSTOMERS</div>
    <CustomerList>
    </CustomerList>

    <div class="center">APPLY FOR LOAN</div>
    <TiltedButton  value="Apply for Loan" size="lg" id="new-event-modal-activator"></TiltedButton>

    <NewCreditScoreForm activator="#new-credit-score-modal-activator"></NewCreditScoreForm>
  </section>
</template>

<script>
import TiltedButton from "../components/TiltedButton";
import CustomerList from "../components/CustomerList";
import NewCreditScoreForm from "../components/NewCreditScoreForm";



export default {
  name: "Home",
  components: {
    TiltedButton,
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