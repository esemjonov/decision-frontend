<template>
  <div class=home>
    <h1>Homepage</h1>

    <v-btn class = "pink white--text">Click me</v-btn>
    <div> <v-btn class="pink" depressed>Button 2</v-btn></div>
    <div> <v-btn class="pink" depressed>Depressed button</v-btn></div>
    <div> <v-btn class="green" flat >flat button</v-btn></div>
    <div>
      <v-btn dpressed class="teal green--text">
        <v-icon left >mdi-email</v-icon>
        <span>Email me</span>
      </v-btn>
    </div>
    <div>
      <v-btn small class="teal green--text">
        <v-icon small left >mdi-email</v-icon>
        <span>Small email me</span>
      </v-btn>
    </div>
    <div>
      <v-btn large class="teal green--text">
        <span>Large email me</span>
        <v-icon large left >mdi-email</v-icon>
      </v-btn>
    </div>
    <div>
      <v-btn fab small dark  color="purple" >
        <v-icon>mdi-favorite</v-icon>
      </v-btn>
    </div>


    <p class = "red white--text" >Basic background color and text color</p>
    <p class = "pink lighten-4 red--text text--darken-4" >Lighter background, darker text,</p>
    <h1 class=display-4>Increase font weights to heading maximum</h1>
    <h4 class=display-1>Smaller display</h4>
    <p class="headline">THis is a headline</p>
    <p class="subheading">This is a subheading</p>
    <p class="caption">This is a caption</p>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',
}
</script>