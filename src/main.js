import Vue from 'vue'
import App from './App'
import store from '@/store'
import router from '@/router'

// jQuery
import 'jquery'
// Bootstrap
import 'Bootstrap'
// font-awesome 图表字体库
import 'font-awesome/css/font-awesome.min.css'
// adminlte
import './assets/js/adminlte'
import './assets/css/adminlte.css'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  store,
  router,
  components: {
    App
  },
  template: '<App/>'
})
