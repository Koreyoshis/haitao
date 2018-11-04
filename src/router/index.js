import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import hcindecx from '@/pages/hcindecx'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'hcindecx',
      component: hcindecx
    }
  ]
})
