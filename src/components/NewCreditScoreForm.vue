<template v-slot:activator="{ on, attrs }">
  <v-card>
    <v-app-bar flat color="#FEE616">
      <TiltedAccentTitle :value="'Add a new event'.toUpperCase()"></TiltedAccentTitle>
    </v-app-bar>


    <v-card-text>
      <v-form v-model="isValid">
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field
                  label="Identity Code"
                  v-model="identityCode"
                  :rules="[v => !!v || 'identityCode is required']"
                  required
              ></v-text-field>
            </v-col>
            <v-col
                cols="12"
            >
              <v-text-field
                  label="loanAmount"
                  v-model="loanAmount"
                  :rules="[v => !!v || 'loanAmount is required']"
                  required
              ></v-text-field>
            </v-col>
            <v-col
                cols="12"
            >
              <v-text-field
                  label="loanPeriodMonths"
                  v-model="loanPeriodMonths"
                  :rules="[v => !!v || 'loanPeriodMonths is required']"
                  required
              ></v-text-field>
            </v-col>

          </v-row>
        </v-container>
      </v-form>
    </v-card-text>

      <v-card-actions>
        <DashedAccentLine>
          <div>
            <tilted-button
                value="Reset"
                text
                @click="closeDialog"
            ></tilted-button>
            <TiltedButton
                value="ADD NEW Credit Application"
                :disabled="!isValid"
                text
                @click="handleSubmit">
            </TiltedButton>
          </div>
        </DashedAccentLine>
      </v-card-actions>


    <div>
      <v-icon color="green"> mdi-currency-eur</v-icon>
      Approved amount: {{ scoringResult}}
    </div>

  </v-card>


</template>

<script>
import {createCreditScore} from '@/network';
import TiltedAccentTitle from "@/components/TiltedAccentTitle";
import TiltedButton from "@/components/TiltedButton";
import DashedAccentLine from "@/components/DashedAccentLine";
//import CreditScoreItem from "@/components/CreditScoreItem";

const getInitialData = () => ({
  identityCode: null,
  loanAmount: null,
  loanPeriodMonths: null,
  isValid: true,
  scoringResult: 1000
});


export default {
  props: {
    activator: String,
  },
  components: {TiltedAccentTitle, TiltedButton, DashedAccentLine},
  name: "NewCreditScoreForm",
  data: () => getInitialData(),

  methods: {
    handleSubmit(creditscore) {
      createCreditScore({
        loanAmount: this.loanAmount,
        identityCode: this.identityCode,
        loanPeriodMonths: this.loanPeriodMonths,
        approvedLoanAmount: 0,
        approvedLoanPeriodMonths: 0,
        creditScore: 0,
        id: 0,
        product: {
          id: 0,
          loanAmountMax: 0,
          loanAmountMin: 0,
          loanPeriodMax: 0,
          loanPeriodMin: 0
        },
        status: "string"
      }).then((response) => {
        console.log(this.identityCode)
        console.log(response)
        console.log(response.status)
        this.scoringResult = response;
        this.dialog = false;
        this.resetFormFields();



      }).catch(error => {
        creditscore.output = error;
      })

    },
    closeDialog() {
      this.dialog = false;
      this.resetFormFields();
    },

    resetFormFields() {
      Object.assign(this.$data, getInitialData());
      //this.$refs.form.resetValidation()
    }
  }
};
</script>

<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>