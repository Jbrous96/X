import { createRouter, createWebHistory } from 'vue-router'
import RoleSelector from '../views/RoleSelector.vue'
import ContactView from '../views/ContactView.vue'


const routes = [
  {
    path: '/',
    name: 'role-selector',
    component: RoleSelector
  },
  {
    path: '/loan-officer',
    name: 'loan-officer-home',
    component: () => import('../views/LoanOfficerHome.vue')  // Note the relative path
  },
  {
    path: '/executive',
    name: 'executive-home',
    component: () => import('../views/ExecutiveHome.vue')    // Note the relative path
  },
  {
    path: '/ContactView',
    name: 'ContactView',
    component: ContactView.vue
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router