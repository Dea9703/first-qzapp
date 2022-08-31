import { createRouter, createWebHistory, } from 'vue-router'

const Login = () => import('../views/register/Index.vue')

const routes = [
  { path: '/login', name: "login", component: Login }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router