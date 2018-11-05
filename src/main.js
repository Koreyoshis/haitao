// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/reset.css'
import './assets/flexible/flexible.debug.js'
import './assets/font_dqoa272d01/iconfont.css'

Vue.config.productionTip = false
import Swiper from "swiper"; 
import "swiper/dist/css/swiper.min.css"
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
