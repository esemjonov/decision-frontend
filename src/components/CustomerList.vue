<template>
  <div>
    <CustomerListItem v-for="customer in customersList" :customer="customer" :key="customer.id"></CustomerListItem>

  </div>


</template>


<script>
import {getAllCustomers} from "@/network";
//import axios from "axios";
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

</style>


