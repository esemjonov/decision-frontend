<template>
  <div>


                <div>
                  <v-row>

                    <div>
                      <v-icon color="black"> mdi-accessibility</v-icon>
                      identityCode: {{ customer.identityCode}}
                    </div>
                    <div>
                      <v-icon color="black"> mdi-currency-eur</v-icon>
                      {{ customer.creditModifier}}
                    </div>

                  </v-row>
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
