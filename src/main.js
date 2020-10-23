import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import '@mdi/font/css/materialdesignicons.css'

Vue.use(VueAxios, axios)
window.VueEvent = new Vue()

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
