<template>
  <section>


    <div class="center">CUSTOMERS</div>
    <CustomerList>
    </CustomerList>

    <div class="center">APPLY FOR LOAN</div>
    <TiltedButton  value="Apply for Loan" size="lg" id="new-event-modal-activator"></TiltedButton>


  </section>
</template>

<script>
import TiltedButton from "../components/TiltedButton";
import CustomerList from "../components/CustomerList";


export default {
  name: "Home",
  components: {
    TiltedButton,
    CustomerList
  }
}
</script>

<style scoped>
.center {
  text-align: center;
}

</style>