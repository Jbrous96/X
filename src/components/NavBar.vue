<template>
  <nav class="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm shadow-sm">
    <div class="container mx-auto px-4 py-3">
      <div class="flex justify-between items-center">
        <router-link to="/" class="flex items-center">
          <img src="/Users/jj/Desktop/Websites/Xtreme/xtreme/public/xtreme-logo.png" alt="XtremeMortgageWorX" class="h-12" />
        </router-link>
        <div class="hidden md:flex space-x-8">
          <router-link
            v-for="item in menuItems"
            :key="item.path"
            :to="item.path"
            class="text-gray-700 hover:text-green-600 transition-colors"
          >
            {{ item.name }}
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NavBar',
  setup() {
    const menuItems = [
      { name: 'HOME', path: '/' },
      { name: 'CONNECT', path: '/connect' },
      { name: 'GROW', path: '/grow' },
      { name: 'WIN', path: '/win' },
      { name: 'CONTACT', path: '/contact' }
    ];

    return {
      menuItems
    };
  }
});
</script>