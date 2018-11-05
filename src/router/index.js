import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import footerss from '@/pages/footerss.vue'
import px from '@/pages/px/px.vue'
import pxbaomingxinxi from '@/pages/px/pxbaomingxinxi.vue'
import pxmonikaoshi from '@/pages/px/pxmonikaoshi.vue'
import pxmonikaosi from '@/pages/px/pxmonikaosi.vue'
import pxxiangqing from '@/pages/px/pxxiangqing.vue'
import zpgangwei from '@/pages/zp/zpgangwei'
import zpgongzhuyoulun from '@/pages/zp/zpgongzhuyoulun.vue'
import zpgoutomgliaojie from '@/pages/zp/zpgoutomgliaojie.vue'
import zphaiyanghexiehao from '@/pages/zp/zphaiyanghexiehao.vue'
import zpshouye from '@/pages/zp/zpshouye.vue'
import zpzhaopinxiangqing from '@/pages/zp/zpzhaopinxiangqing.vue'
import zpjieshaotanchuk from '@/pages/zp/zpjieshaotanchuk.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path: '/footerss',
      name: 'footerss',
      component: footerss
    },{
      path: '/px',
      name: 'px',
      component: px
    },{
      path: '/pxbaomingxinxi',
      name: 'pxbaomingxinxi',
      component: pxbaomingxinxi
    },{
      path: '/pxmonikaoshi',
      name: 'pxmonikaoshi',
      component: pxmonikaoshi
    },{
      path: '/pxmonikaosi',
      name: 'pxmonikaosi',
      component: pxmonikaosi
    },{
      path: '/pxxiangqing',
      name: 'pxxiangqing',
      component: pxxiangqing
    },{
      path: '/zpgangwei',
      name: 'zpgangwei',
      component: zpgangwei
    },{
      path: '/zpgongzhuyoulun',
      name: 'zpgongzhuyoulun',
      component: zpgongzhuyoulun
    },{
      path: '/zpgoutomgliaojie',
      name: 'zpgoutomgliaojie',
      component: zpgoutomgliaojie
    },{
      path: '/zphaiyanghexiehao',
      name: 'zphaiyanghexiehao',
      component: zphaiyanghexiehao
    },{
      path: '/zpshouye',
      name: 'zpshouye',
      component: zpshouye
    },{
      path: '/zpzhaopinxiangqing',
      name: 'zpshzpzhaopinxiangqingouye',
      component: zpzhaopinxiangqing
    },{
      path: '/zpjieshaotanchuk',
      name: 'zpjieshaotanchuk',
      component: zpjieshaotanchuk
    }
  ]
})
