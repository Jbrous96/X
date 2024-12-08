import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/styles/main.css'
console.log('App starting...');
createApp(App).mount('#app');
console.log('App mounted');
// Font Awesome Setup
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
    faChartLine,
    faMobileAlt,
    faShareAlt,
    faBell,
    faMagic,
    faBullhorn,
    faMapMarkerAlt,
    faPhone,
    faEnvelope,
    faCheckCircle,
    faRocket,
    faCogs,
    faUsers
} from '@fortawesome/free-solid-svg-icons'
import {
    faFacebook,
    faTwitter,
    faLinkedinIn,
    faInstagram
} from '@fortawesome/free-brands-svg-icons'

// Add icons to library
library.add(
    faChartLine,
    faMobileAlt,
    faShareAlt,
    faBell,
    faMagic,
    faBullhorn,
    faMapMarkerAlt,
    faPhone,
    faEnvelope,
    faCheckCircle,
    faRocket,
    faCogs,
    faUsers,
    faFacebook,
    faTwitter,
    faLinkedinIn,
    faInstagram
)
/* eslint-disable */ 
const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.config.compilerOptions.isCustomElement = tag => tag === 'dashboard-scene'

app.mount('#app')
