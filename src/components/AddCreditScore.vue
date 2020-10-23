<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="title">Identity Code</label>

        <input
            type="text"
            class="form-control"
            id="title"
            required
            v-model="creditscore.identityCode"
            name="title"
        />
      </div>

      <div class="form-group">
        <label for="loanAmount">loanAmount</label>
        <input
            class="form-control"
            id="loanAmount"
            required
            v-model="creditscore.loanAmount"
            name="loanAmount"
        />
      </div>

      <div class="form-group">
        <label for="loanPeriodMonths">loanPeriodMonths</label>
        <input
            class="form-control"
            id="loanPeriodMonths"
            required
            v-model="creditscore.loanPeriodMonths"
            name="loanPeriodMonths"
        />
      </div>

      <button @click="saveTutorial" class="btn btn-success">Submit</button>
    </div>

    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newTutorial">Add</button>
    </div>
  </div>
</template>

<script>
import CreditScoreDataService from "../services/CreditScoreDataService";

export default {
  name: "add-creditscore",
  data() {
    return {
      creditscore: {
        approvedLoanAmount: 0,
        approvedLoanPeriodMonths: 0,
        creditScore: 0,
        id: 0,
        identityCode: "string",
        loanAmount: 0,
        loanPeriodMonths: 0,
        product: {
          id: 0,
          loanAmountMax: 0,
          loanAmountMin: 0,
          loanPeriodMax: 0,
          loanPeriodMin: 0
        },
        status: "string"
      },
      submitted: false
    };
  },
  methods: {
    saveTutorial() {
      var data = {
        approvedLoanAmount: this.creditscore.approvedLoanAmount,
        approvedLoanPeriodMonths: this.creditscore.approvedLoanPeriodMonths,
        creditScore: this.creditscore.creditScore,
        id: this.creditscore.id,
        identityCode: this.creditscore.identityCode,
        loanAmount: this.creditscore.loanAmount,
        loanPeriodMonths: this.creditscore.loanPeriodMonths,
        product: this.creditscore.product,
        status: this.creditscore.status

      };

      CreditScoreDataService.create(data)
          .then(response => {
            this.creditscore.id = response.data.id;
            console.log(response.data);
            this.submitted = true;
          })
          .catch(e => {
            console.log(e);
          });
    },

    newTutorial() {
      this.submitted = false;
      this.creditscore = {};
    }
  }
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>