import Vue from 'vue'
import App from './App.vue'
import VueCarousel from 'vue-carousel';
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.use(VueCarousel);

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
