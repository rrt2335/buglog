import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Info from './views/Info.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },{
      path: '/:id',
      name: 'info',
      component: Info
    },{
      path: '*',
      redirect: '/'
    }
  ]
})
