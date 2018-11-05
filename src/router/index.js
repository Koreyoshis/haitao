import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
<<<<<<< HEAD
import hcindecx from '@/pages/hcindecx'
=======
<<<<<<< HEAD
import zpym from '@/pages/zpym.vue'
=======
import footerss from '@/pages/footerss.vue'
>>>>>>> 59f750ad580a2ed145f6b6d4fd01653df628e9d3
>>>>>>> 7f50a333817b94049bf8a5f9921451a71c2af94e
Vue.use(Router)

export default new Router({
  routes: [
    {
<<<<<<< HEAD
      path: '/',
      name: 'hcindecx',
      component: hcindecx
=======
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },{
<<<<<<< HEAD
      path: '/zpym',
      name: 'zpym',
      component: zpym
=======
      path: '/footerss',
      name: 'footerss',
      component: footerss
>>>>>>> 59f750ad580a2ed145f6b6d4fd01653df628e9d3
>>>>>>> 7f50a333817b94049bf8a5f9921451a71c2af94e
    }
  ]
})
