<template>
  <footer class="bg-gray-200 text-black py-16 bottom-0 w-full height-18vh overscroll-y-none">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-12">
        <div>
          <img src="public/assets/xr4.png" alt="XtremeMortgageWorX" class="h-12 mb-6" />
          <p class="text-gray-00">
            Revolutionizing the mortgage industry with cutting-edge technology and unparalleled service.
          </p>
        </div>
        
        <div>
          <h3 class="text-lg font-bold mb-4">Quick Links</h3>
          <ul class="space-y-2">
            <li v-for="(link, index) in quickLinks" :key="index">
              <router-link
                :to="link.path"
                class="text-gray-800 hover:text-white transition-colors"
              >
                {{ link.name }}
              </router-link>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 class="text-lg font-bold mb-4">Contact</h3>
          <ul class="space-y-2">
            <li class="flex items-start space-x-2">
              <font-awesome-icon icon="map-marker-alt" class="text-green-500 mt-1" />
              <span class="text-gray-900">
                123 Business Avenue<br>
                Suite 100<br>
                City, State 12345
              </span>
            </li>
            <li class="flex items-center space-x-2">
              <font-awesome-icon icon="phone" class="text-green-500" />
              <a href="tel:866-855-5070" class="text-gray-900 hover:text-white">
                866-855-5070
              </a>
            </li>
            <li class="flex items-center space-x-2">
              <font-awesome-icon icon="envelope" class="text-green-500" />
              <a href="mailto:info@xtrememortgageworx.com" class="text-gray-900 hover:text-white">
                info@xtrememortgageworx.com
              </a>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 class="text-lg font-bold mb-4">Follow Us</h3>
          <div class="flex space-x-4">
            <a
              v-for="(social, index) in socialLinks"
              :key="index"
              :href="social.url"
              target="_blank"
              rel="noopener noreferrer"
              class="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-green-500 transition-colors"
            >
              <font-awesome-icon :icon="['fab', social.icon]" />
            </a>
          </div>
          <div class="mt-6">
            <h4 class="text-sm font-bold mb-2">Newsletter</h4>
            <form @submit.prevent="subscribeNewsletter" class="flex">
              <input
                v-model="emailSubscribe"
                type="email"
                placeholder="Enter your email"
                class="flex-1 px-4 py-2 bg-gray-800 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button
                type="submit"
                class="px-4 py-2 bg-green-500 hover:bg-green-600 rounded-r-lg transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      
      <div class="mt-12 pt-8 border-t border-gray-800">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <p class="text-gray-400 text-sm">
            © {{ currentYear }} XtremeMortgageWorX. All rights reserved.
          </p>
          <div class="flex space-x-6 mt-4 md:mt-0">
            <a
              v-for="(link, index) in legalLinks"
              :key="index"
              :href="link.url"
              class="text-gray-400 hover:text-white text-sm transition-colors"
            >
              {{ link.name }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { defineComponent, ref, computed } from 'vue'

export default defineComponent({
  name: 'AppFooter',
  setup() {
    const emailSubscribe = ref('')
    
    const currentYear = computed(() => new Date().getFullYear())
    
    const quickLinks = [
      { name: 'Home', path: '/' },
      { name: 'Connect', path: '/connect' },
      { name: 'Grow', path: '/grow' },
      { name: 'Win', path: '/win' },
      { name: 'Contact', path: '/contact' }
    ]
    
    const socialLinks = [
      { icon: 'facebook-f', url: '#' },
      { icon: 'twitter', url: '#' },
      { icon: 'linkedin-in', url: '#' },
      { icon: 'instagram', url: '#' }
    ]
    
    const legalLinks = [
      { name: 'Privacy Policy', url: '#' },
      { name: 'Terms of Service', url: '#' },
      { name: 'Cookie Policy', url: '#' }
    ]
    
    const subscribeNewsletter = () => {
      // Implement newsletter subscription logic
      console.log('Newsletter subscription:', emailSubscribe.value)
      emailSubscribe.value = ''
    }
    
    return {
      emailSubscribe,
      currentYear,
      quickLinks,
      socialLinks,
      legalLinks,
      subscribeNewsletter
    }
  }
})
</script>

<style scoped>
/* Add any additional styles here */
</style>