import { createRouter, createWebHistory } from 'vue-router'

import HeaderView from '../components/Header.vue'
import FooterView from '../components/Footer.vue'


import HomeView from '../views/HomeView.vue'
import SigninView from '../views/SigninView.vue'
import SignupView from '../views/SignupView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },

    {
      path: '/signup',
      name: 'signup',
      component: SignupView
  
    },

    {
      path: '/signin',
      name: 'signin',
      component: SigninView
    },
  ]
})

export default router
