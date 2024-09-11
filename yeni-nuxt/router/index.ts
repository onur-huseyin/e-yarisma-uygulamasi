// File: router/index.ts
import { createRouter, createWebHistory } from 'vue-router'
import LoginForm from '~/pages/login-form/index.vue'
import Verification from '~/pages/login-form-2/index.vue'
import Sucsesfull from '~/pages/sucsesfull/index.vue'
import Answer from '~/pages/last-login/index.vue'

const routes = [
  {
    path: '/login-form',
    name: 'LoginForm',
    component: LoginForm
  },
  {
    path: '/login-form-2',
    name: 'Verification',
    component: Verification
  },
  {
    path:'/last-login',
    name:'Answer',
    component: Answer
  },
  {
    path:'/sucsessfull',
    name:'Sucsesfull',
    component: Sucsesfull
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
