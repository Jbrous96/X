import { createRouter, createWebHistory } from 'vue-router';
import RoleSelector from '../views/RoleSelector.vue';
import ExecutiveHome from '../views/ExecutiveHome.vue';
import LoanOfficerHome from '../views/LoanOfficerHome.vue'; 
import WinView from '../views/WinView.vue';
import ConnectView from '../views/ConnectView.vue';
import ContactView from '../views/ContactView.vue';
import GrowView from '../views/GrowView.vue';
import AnimatedBackground from '../views/AnimatedBackground.vue';
import FeatureCard from '/src/components/FeatureCard.vue' 


const routes = [
  {
    path: '/',
    name: 'role-selector',
    component: RoleSelector,
  },
  {
    path: '/loan-officer',
    name: 'loan-officer-home',
    component: LoanOfficerHome, FeatureCard
  },
  {
    path: '/executive-home',
    name: 'executive-home',
    component: ExecutiveHome, 
  },
  {
    path: '/win-view',
    name: 'WinVieiw',
    component: WinView
  },
  {
    path: '/connect-view',
    name: 'ConnecttView',
    component: ConnectView
  },
  {
    path: '/contact-View',
    name: 'ContactView',
    component: ContactView
  },
  {
  path: '/GrowView',
  name: 'GrowView',
  component: GrowView
  },
  {
    path: '/aimated-background',
    name: 'AnimatedBackground',
    comoponent: AnimatedBackground
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
