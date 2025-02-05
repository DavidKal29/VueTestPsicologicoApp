import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegisterView from '@/views/RegisterView.vue'
import LoginView from '@/views/LoginView.vue'
import PerfilView from '@/views/PerfilView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/perfil',
    name: 'perfil',
    component: PerfilView,
    meta:{ requiresAuth:true }
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

import { auth } from '@/firebase/firebase.js'

router.beforeEach((to,from,next)=>{
  const user=auth.currentUser

  if (to.meta.requiresAuth) {
    if (!user) {//el usuario ni se ha logueado
      next('/login')
    }else if(!user.emailVerified){//el usuario se logeó pero no verifico el email
      next('/login')
    }else{
      next()
    }
  }else{
    next()
  }
})

export default router
