<template>
  <div>


                <div>

                  <ul>
                    <v-row>
                      <div>

                        <v-icon color="black"> mdi-cards-diamond</v-icon>
                        identityCode:  {{customer.identityCode}}

                      </div>



                      <div>
                        <v-icon color="green"> mdi-currency-eur</v-icon>
                        Free money: {{customer.creditModifier}}
                      </div>

                    </v-row>

                  </ul>

                </div>

  </div>
</template>

<script>

export default {
  name: "CustomerListItem",
  props: {
    customer: Object,
  }

}

</script>
