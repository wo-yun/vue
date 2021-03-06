import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    // {
    //   path: '/',
    //   name: 'Hello',
    //   component: Hello
    // },
    {
      path: '',
      name: 'index',
      component: require('@view/index')
    },
    {
      path: '/aaa',
      name: 'aaa',
      component: require('@view/aaa')
    },
    {
      path: '/bbb',
      name: 'bbb',
      component: require('@view/bbb')
    },
    {
      path: '/wx',
      name: 'wx',
      component: require('@view/wx/wx')
    },
  ]
})
