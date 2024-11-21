<template>
  <div id="app">
    <nav-bar v-if="!isRoleSelectPage" />
    
    <router-view></router-view>
    <app-footer v-if="!isRoleSelectPage" />  </div>
</template>

<script>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import NavBar from '@/components/NavBar.vue';
import AppFooter from '@/components/AppFooter.vue';
import ContactView from '@/views/ContactView.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    AppFooter
  },
  /**
   * Composable that determines if the current route is the role select page
   * and returns a boolean indicating if the current route is the role select page.
   * @returns {View} An object containing the isRoleSelectPage property.
   */
  setup() {
    const route = useRoute();
    const isRoleSelectPage = computed(() => route.path === '/');

    return {
      isRoleSelectPage
    };
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
}
</style>