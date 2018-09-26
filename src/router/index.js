import Vue from 'vue'
import Router from 'vue-router'
import SignIn from '@/components/access/SignIn'
import Request from '@/components/access/Request'
import Forget from '@/components/access/Forget'
import Home from '@/components/HomePage'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'signin', component: SignIn },
    { path: '/request_access', name: 'request', component: Request },
    { path: '/forgot_password', name: 'forget', component: Forget },
    { path: '/homepage', name: 'home', component: Home }
  ]
})
