import Vue from 'vue'
import Router from 'vue-router'
import Auth from './views/auth'
import Register from './views/register'
import Order from './views/order'
import Protocol from './views/protocol'
import Clause from './views/clause'
import Right from './views/right'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'register',
      component: Register
    },
    {
      path: '/auth',
      name: 'auth',
      component: Auth
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/order',
      name: 'order',
      component: Order
    },
    {
      path: '/protocol',
      name: 'protocol',
      component: Protocol
    },
    {
      path: '/right',
      name: 'right',
      component: Right
    },
    {
      path: '/clause',
      name: 'clause',
      component: Clause
    },
  ]
})
