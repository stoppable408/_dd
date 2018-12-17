import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import Thanks from './views/Thanks.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/thanks',
      name: 'Thanks',
      component: Thanks
    },
    
  ]
})
