<template>
  <div id="app">
    <RoleSelector v-if="RoleSelector" />
    <nav-bar v-if="!RoleSelector" />
    <LoanOfficerHome v-if="!Executive && !RoleSelector" />
    <RoleSelector v-if="RoleSelector" />
    <nav-bar v-if="!RoleSelector" />
    <ContactView v-if="isContact" />
    <AnimatedBackground v-if="isContact" />
    <ConnectView v-if="ConnectView" />
    <GrowView v-if="GrowView" />
    <WinView v-if="isWin" />
    <router-view></router-view>
    <app-footer v-if="!RoleSelector && ExecutiveHome" />
  </div>
</template>

<script>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import RoleSelector from '@/views/RoleSelector.vue';
import NavBar from '@/components/NavBar.vue';
import AppFooter from '@/components/AppFooter.vue';
import ContactView from '@/views/ContactView.vue';
import ConnectView from '@/views/ConnectView.vue';
import GrowView from '@/views/GrowView.vue';
import WinView from '@/views/WinView.vue';
import AnimatedBackground from '@/views/AnimatedBackground.vue';
import LoanOfficerHome from '@/views/LoanOfficerHome.vue';
import ExecutiveHome from '@/views/ExecutiveHome.vue';

export default {
  name: 'App', 
  components: {
    // views,
    LoanOfficerHome,
    RoleSelector,
    // Executivehome,
    NavBar,
    ContactView,
    ConnectView,
    GrowView,
    WinView,
    AnimatedBackground,
    AppFooter
  },
  setup() {
    const route = useRoute();
    const RoleSelector = computed(() => route.path === '/');
    const Executive = computed(() => route.path === '/executive');
    const LoanOfficerHome = computed (() => route.path === 'loan-officer');
    const WinView = computed(() => route.path === '/win');
    const GrowView = computed(() => route.path === '/grow');
    const ContactView = computed(() => route.path === '/contact'); 

    return {
      RoleSelector,
      Executive,
      ExecutiveHome,
      LoanOfficerHome,
      WinView,
      ContactView,
      ConnectView,
      GrowView,
      AnimatedBackground
    };
  },
};
</script>

<style>

* {
  margin: 80;
  padding: 0;
  box-sizing: border-box;
  margin: 0; /* Reset margin for all elements */
  padding: 0; /* Reset padding for all elements */
  box-sizing: border-box;
}
#app {

  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  width: 100vw; /* Set the width of the app to 100% of the viewport width */
  height: 100vh; /* Set the height of the app to 100% of the viewport height */
  overflow-x: hidden; /* Hide horizontal overflow */
}
</style>