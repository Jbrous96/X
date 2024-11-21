<template>
  <div class="relative">
    <header class="page_header min-h-screen relative">
      <div class="tog">
        <div class="tog_header">
          <button class="tog_opener">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <div class="tog_menu">
          <nav class="menu">
            <ul class="menu_list menu_list-main">
              <li class="page" v-for="(item, index) in menuItems" :key="index">
                <router-link 
                  :to="item.path" 
                  class="menu_link menu_link-anim"
                >
                  <span class="link_layer" :data-text="item.hoverText"></span>
                  {{ item.text }}
                </router-link>
              </li>
            </ul>
          </nav>
          <div class="social">
            <a v-for="(social, index) in socialLinks" 
               :key="index"
               :href="social.url"
               :class="social.icon"
            ></a>
          </div>
        </div>
      </div>
      <section>
        <h1 data-text="We be Rebels">Mortgage Lending Redesigned</h1>
      </section>
    </header>

    <!-- Rest of your content sections -->
    <section class="py-24 bg-white">
      <!-- Your existing content -->
    </section>
  </div>
</template>

<script>
import { defineComponent, onMounted } from 'vue'

export default defineComponent({
  name: 'HomeView',
  setup() {
    const menuItems = [
      { path: '/about', text: 'The Problem', hoverText: '& Solution' },
      { path: '/services', text: 'Services', hoverText: 'Services' },
      { path: '/our-work', text: 'Our Work', hoverText: 'Xtreme' },
      { path: '/careers', text: 'Careers', hoverText: 'Careers' },
      { path: '/contact', text: 'Contact Us', hoverText: 'Contact Us' }
    ]

    const socialLinks = [
      { icon: 'fa fa-facebook', url: '#' },
      { icon: 'fa fa-twitter', url: '#' },
      { icon: 'fa fa-google', url: '#' },
      { icon: 'fa fa-linkedin', url: '#' },
      { icon: 'fa fa-youtube', url: '#' },
      { icon: 'fa fa-instagram', url: '#' }
    ]

    onMounted(() => {
      // Initialize jQuery functionality
      if (window.jQuery) {
        window.jQuery('.tog_opener').on('click', () => {
          window.jQuery('.tog').toggleClass('tog-opened')
        })
      }
    })

    return {
      menuItems,
      socialLinks
    }
  }
})
</script>

<style>
/* Copy all your provided CSS here, but let's update some colors */
body {
  background-color: theme('colors.neutral');
  height: 100vh;
}

.page {
  font-family: 'Anton';,
  letter-spacing: .41rem;
  line-height: -2.4;
  font-weight: 700 !important;
}

/* Rest of your CSS */
/* Update any color values using the Tailwind color variables:
   theme('colors.primary')
   theme('colors.secondary')
   theme('colors.neutral')
   theme('colors.accent')
*/
</style>