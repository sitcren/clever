// router.js
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import App from '../App.vue'
import LoginPage from '../views/loginPage.vue'
import CadastrarPage from '../views/CadastrarPage.vue'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage
  },
  {
    path: '/cadastrar',
    name: 'CadastrarPage',
    component: CadastrarPage
  }
  // Adicione mais rotas conforme necessário
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router


// const routes: Array<RouteRecordRaw> = [
//   {
//     path: '/', 
//     name: 'home',
//     component: HomeView
//   },
//   {
//     path: '/about',
//     name: 'about',
//     component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
//   }
// ]

// const router = createRouter({
//   history: createWebHistory(process.env.BASE_URL),
//   routes
// })

// export default router
