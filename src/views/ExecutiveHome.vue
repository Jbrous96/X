<template>
  <WinView>
    <div class="min-h-screen bg-white">
      <nav :class="`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between items-center h-20">
            <div class="flex items-center">
              <img src="/api/placeholder/150/40" alt="Xtreme MortgageWorx" class="h-8" />
            </div>
            <div class="md:flex items-center space-x-12">
              <a href="#platform" class="text-gray-700 hover:text-green-500 text-sm font-medium">Platform</a>
              <a href="#features" class="text-gray-700 hover:text-green-500 text-sm font-medium">Features</a>
              <a href="#security" class="text-gray-700 hover:text-green-500 text-sm font-medium">Security</a>
              <a href="#integrations" class="text-gray-700 hover:text-green-500 text-sm font-medium">Integrations</a>
              <button class="bg-gray-900 text-white px-6 py-2.5 rounded-md hover:bg-gray-800 text-sm font-medium">
                Request Demo
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
    </WinView>
      <section class="pt-40 pb-24 overflow-hidden">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 class="text-5xl margin-4 font-bold text-gray-900 leading-tight mb-6">
                The Future of Mortgage Management is Here
              </h1>
              <p class="text-xl text-gray-600 mb-8 leading-relaxed">
                Experience the most sophisticated CRM platform built exclusively for mortgage professionals. Streamline workflows, automate tasks, and close more deals.
              </p>
              <div class="flex items-center space-x-6">
                <button class="bg-green-500 text-white px-8 py-3 rounded-md hover:bg-green-600 flex items-center group">
                  Get Started 
                  <ChevronRight class="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </button>
                <button class="text-gray-700 flex items-center group">
                  Watch Demo
                  <ArrowRight class="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
            <div class="relative">
              <div class="bg-gradient-to-br from-green-50 to-gray-50 rounded-2xl p-8">
                <img src="/api/placeholder/600/400" alt="Dashboard Preview" class="rounded-lg shadow-2xl" />
              </div>
              <div class="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-xl">
                <div class="flex items-center space-x-3">
                  <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span class="text-sm font-medium text-gray-700">Live Pipeline Updates</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <section class="py-20 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid md:grid-cols-3 gap-8">
            <div v-for="(stat, index) in stats" :key="index" class="text-center">
              <div class="text-4xl font-bold text-gray-900 mb-2">{{ stat.number }}</div>
              <div class="text-gray-600">{{ stat.label }}</div>
            </div>
          </div>
        </div>
      </section>
  
      <section class="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-20">
            <h2 class="text-3xl font-bold text-white mb-4">
              Advanced Mortgage Management
            </h2>
            <p class="text-xl text-gray-300 max-w-3xl mx-auto">
              Powerful tools designed specifically for mortgage professionals
            </p>
          </div>
          <div class="grid lg:grid-cols-2 gap-16">
            <div class="relative">
              <div class="bg-gradient-to-br from-green-500/10 to-gray-800 rounded-2xl p-8">
                <img src="/api/placeholder/600/400" alt="Pipeline View" class="rounded-lg shadow-2xl" />
              </div>
              <div class="absolute -top-6 -right-6 bg-green-500 text-white p-4 rounded-lg shadow-xl">
                <div class="flex items-center space-x-3">
                  <Activity class="h-5 w-5" />
                  <span class="text-sm font-medium">Live Updates</span>
                </div>
              </div>
            </div>
            <div class="space-y-8">
              <div v-for="(feature, index) in features" :key="index" class="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm">
                <div class="flex items-start space-x-4">
                  <div class="bg-gray-700 rounded-lg p-3">
                    <component :is="feature.icon" class="h-6 w-6 text-green-500" />
                  </div>
                  <div>
                    <h3 class="text-xl font-semibold text-white mb-2">{{ feature.title }}</h3>
                    <p class="text-gray-300">{{ feature.description }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  <FeatureCard max-w-7xl mx-auto px-4 sm:px-6 lg:px-8>test</FeatureCard>
      <footer class="bg-gray-900 text-gray-400 py-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid md:grid-cols-4 gap-8">
            <div>
              <img src="/api/placeholder/150/40" alt="Xtreme MortgageWorx" class="h-8 mb-6" />
              <p class="text-sm">
                Powered by advanced technology to help mortgage professionals succeed.
              </p>
            </div>
            <div v-for="(column, index) in footerColumns" :key="index">
              <h4 class="text-white font-semibold mb-4">{{ column.title }}</h4>
              <ul class="space-y-2">
                <li v-for="(link, lIndex) in column.links" :key="lIndex">
                  <a href="#" class="hover:text-white">{{ link }}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
  </template>
  
  <script>
  import { ref, onMounted, onUnmounted } from 'vue';
  import { 
    ChevronRight, 
    ArrowRight, 
    PieChart, 
    Clock, 
    MessageSquare, 
    Activity 
  } from 'lucide-vue-next';
  
  export default {
    name: 'ExecutiveHome',
    components: {
      ChevronRight,
      ArrowRight,
      PieChart,
      Clock,
      MessageSquare,
      Activity
    },
    setup() {
      const scrolled = ref(false);
  
      const stats = [
        { number: "$50B+", label: "Loans Processed" },
        { number: "98%", label: "Client Satisfaction" },
        { number: "10,000+", label: "Active Users" }
      ];
  
      const features = [
        {
          icon: PieChart,
          title: "Smart Pipeline Management",
          description: "Visualize and track every stage of your mortgage applications with automated status updates and milestone tracking."
        },
        {
          icon: Clock,
          title: "Automated Follow-ups",
          description: "Set intelligent reminders and automated communications to keep clients engaged throughout the process."
        },
        {
          icon: MessageSquare,
          title: "Client Communication Hub",
          description: "Centralize all client interactions with integrated email, SMS, and secure messaging capabilities."
        }
      ];
  
      const footerColumns = [
        {
          title: "Originate",
          links: ["Founder", "Security", "Updates"]
        },
        {
          title: "Guarantee",
          links: ["About", "Contact", "Blog"]
        },
        {
          title: "Resources",
          links: ["Documentation", "Support", "API"]
        }
      ];
  
      const handleScroll = () => {
        scrolled.value = window.scrollY > 50;
      };
  
      onMounted(() => {
        window.addEventListener('scroll', handleScroll);
      });
  
      onUnmounted(() => {
        window.removeEventListener('scroll', handleScroll);
      });
  
      return {
        scrolled,
        stats,
        features,
        footerColumns
      };
    }
  };
  </script>