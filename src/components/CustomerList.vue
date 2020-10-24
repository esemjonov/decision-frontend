<template>
  <div class = "customer-cards">
    <CustomerListItem v-for="customer in customersList" :customer="customer" :key="customer.id"></CustomerListItem>
  </div>
</template>

<script>
import {getAllCustomers} from "@/network";
import CustomerListItem from "./CustomerListItem";
  export default {
    name: "CustomerList",
    components: {CustomerListItem},
    data() {
      return {
        customersList: []
      }
    },
    mounted() {
      this.fetchData();
      getAllCustomers()
    },
    methods: {
        fetchData() {
          getAllCustomers().then(response => {
            this.customersList = response;
          });
        }
    }
  }
</script>

<style scoped>

.customer-cards {
  align-content: center;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-template-rows: auto;
  grid-gap: 1px;
}

</style>


