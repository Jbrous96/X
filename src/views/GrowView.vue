<template>
  <div class="pt-20">
    <!-- Hero Section -->
    <section class="min-h-[60vh] relative flex items-center overflow-hidden bg-gray-900">
      <DashboardContainer />
      <!-- Background gradients -->
      <div class="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900"></div>
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-green-500/10 via-transparent to-transparent"></div>
      
      <!-- Hero Content -->
      <div class="container mx-auto px-4 relative z-20">
        <h1 class="text-6xl md:text-7xl font-display text-white mb-6">
          Connect & Grow
        </h1>
        <p class="text-xl text-white/80 mb-12 max-w-2xl">
          Stay connected with your team, clients, and prospects through our comprehensive suite of tools.
        </p>
      </div>
    </section>

    <!-- Features Grid -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4 max-w-7xl">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <!-- Communication Feature -->
          <div class="space-y-4">
            <h3 class="text-2xl font-semibold">Seamless Communication</h3>
            <p class="text-gray-600">Stay connected with your team and clients through integrated communication tools.</p>
            <ul class="space-y-3">
              <li class="flex items-center">
                <span class="h-5 w-5 rounded-full bg-green-500 flex items-center justify-center mr-3">
                  <i class="fas fa-check text-white text-sm"></i>
                </span>
                <span>Real-time chat and messaging</span>
              </li>
              <li class="flex items-center">
                <span class="h-5 w-5 rounded-full bg-green-500 flex items-center justify-center mr-3">
                  <i class="fas fa-check text-white text-sm"></i>
                </span>
                <span>Video conferencing integration</span>
              </li>
            </ul>
          </div>
          
          <!-- Insights Feature -->
          <div class="space-y-4">
            <h3 class="text-2xl font-semibold">Data-Driven Insights</h3>
            <p class="text-gray-600">Make informed decisions with comprehensive analytics and reporting.</p>
            <ul class="space-y-3">
              <li class="flex items-center">
                <span class="h-5 w-5 rounded-full bg-green-500 flex items-center justify-center mr-3">
                  <i class="fas fa-check text-white text-sm"></i>
                </span>
                <span>Performance dashboards</span>
              </li>
              <li class="flex items-center">
                <span class="h-5 w-5 rounded-full bg-green-500 flex items-center justify-center mr-3">
                  <i class="fas fa-check text-white text-sm"></i>
                </span>
                <span>Custom report generation</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Growth Path Section -->
    <section class="py-24 bg-gray-50 relative overflow-hidden">
      <div class="container mx-auto px-4 max-w-7xl relative z-10">
        <div class="max-w-3xl mx-auto">
          <h2 class="text-3xl font-bold text-center mb-16">Your Growth Path</h2>
          <div class="space-y-16">
            <div v-for="(milestone, index) in growthMilestones" 
                 :key="milestone.title"
                 class="flex items-start space-x-8"
                 :class="index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'">
              <div class="flex-1 bg-white p-8 rounded-lg shadow-sm">
                <h3 class="text-xl font-semibold mb-4">{{ milestone.title }}</h3>
                <p class="text-gray-600">{{ milestone.description }}</p>
              </div>
              <div class="flex-none w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
                <i :class="`fas fa-${milestone.icon} text-white`"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Solutions Grid -->
    <section class="py-24 bg-white">
      <div class="container mx-auto px-4 max-w-7xl">
        <h2 class="text-3xl font-bold text-center mb-16">Growth Solutions</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div v-for="solution in growthSolutions" 
               :key="solution.title"
               class="bg-white rounded-lg shadow-sm p-8 hover:shadow-md transition-shadow">
            <div class="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-6">
              <i :class="`fas fa-${solution.icon} text-green-500 text-xl`"></i>
            </div>
            <h3 class="text-xl font-semibold mb-4">{{ solution.title }}</h3>
            <p class="text-gray-600 mb-6">{{ solution.description }}</p>
            <ul class="space-y-3">
              <li v-for="item in solution.items" 
                  :key="item"
                  class="flex items-center">
                <span class="h-5 w-5 rounded-full bg-green-500 flex items-center justify-center mr-3">
                  <i class="fas fa-check text-white text-sm"></i>
                </span>
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4 max-w-7xl">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="stat in statistics" 
               :key="stat.label"
               class="text-center p-8 rounded-lg bg-white shadow-sm">
            <div class="text-4xl font-bold text-green-500">{{ stat.value }}</div>
            <div class="text-gray-600 mt-2">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { defineComponent, onMounted } from 'vue'
import { useWindowScroll } from '@vueuse/core'
import DashboardContainer from '@/components/three/DashboardContainer.vue'

export default defineComponent({
  name: 'GrowView',
  components: {
    DashboardContainer
  },
  setup() {
    const { y: scrollY } = useWindowScroll()

    const statistics = [
      { value: '48+', label: 'Real-Time Reports' },
      { value: '99.9%', label: 'System Uptime' },
      { value: '24/7', label: 'Support Available' }
    ]

    const growthMilestones = [
      {
        title: 'Get Started',
        description: 'Set up your account and import your existing data',
        icon: 'rocket'
      },
      {
        title: 'Optimize Workflow',
        description: 'Streamline your processes with automated tools',
        icon: 'cogs'
      },
      {
        title: 'Expand Reach',
        description: 'Leverage marketing tools to grow your client base',
        icon: 'users'
      },
      {
        title: 'Monitor Success',
        description: 'Track performance and adjust strategies in real-time',
        icon: 'chart-line'
      }
    ]

    const growthSolutions = [
      {
        title: 'Market Intelligence',
        description: 'Stay ahead of market trends with real-time data and analytics.',
        icon: 'chart-pie',
        items: [
          'Market trend analysis',
          'Competitor insights',
          'Performance metrics',
          'Custom reporting'
        ]
      },
      {
        title: 'Automation Tools',
        description: 'Streamline your workflow with powerful automation features.',
        icon: 'robot',
        items: [
          'Task automation',
          'Document processing',
          'Lead distribution',
          'Follow-up management'
        ]
      }
    ]

    onMounted(() => {
      window.$nextTick(() => {
        window.dispatchEvent(new Event('resize'))
      })
    })

    return {
      scrollY,
      statistics,
      growthMilestones,
      growthSolutions
    }
  }
})
</script>

<style scoped>
.font-display {
  font-family: sans-serif; 
}

html {
  scroll-behavior: smooth;
}
section {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeIn 0.6s ease-out forwards;
}

@keyframes fadeIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.relative {
  z-index: 1;
}

.z-20 {
  z-index: 20;
}
.hover\:shadow-md:hover {
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
}
</style>