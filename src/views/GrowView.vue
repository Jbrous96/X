<template>
  <div class="pt-20">
    <section
      class="min-h-screen relative flex items-center overflow-hidden"
      :style="{ transform: `translateY(${scrollY * 0.5}px)` }"
    >
      <div class="absolute inset-0 bg-gradient-to-b from-gray-900/70 to-transparent z-10"></div>
<div class="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-90"></div>
<div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-500/20 via-transparent to-transparent"></div>
      <div class="container mx-auto px-4 relative z-20">
        <div class="max-w-3xl">
          <h1 class="text-5xl md:text-7xl font-bold text-white mb-8">
            Accelerate Your Growth
          </h1>
          <p class="text-xl text-white/90 mb-12">
            Leverage our powerful tools and insights to expand your business and increase profitability.
          </p>
          <button class="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
            Start Growing Today
          </button>
        </div>
      </div>
    </section>

    <section class="py-24 bg-white">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="(stat, index) in statistics"
            :key="index"
            class="text-center p-8 rounded-lg bg-gray-50 transform hover:-translate-y-2 transition-transform duration-300"
          >
            <div class="text-4xl font-bold text-green-500 mb-4">
              {{ stat.value }}
            </div>
            <div class="text-gray-600">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 bg-gray-50">
      <div class="container mx-auto px-4">
        <timeline-section :milestones="growthMilestones" />
      </div>
    </section>

    <section class="py-24 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-3xl font-bold mb-8">Growth Solutions</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <feature-card
              v-for="(solution, index) in growthSolutions"
              :key="index"
              :title="solution.title"
              :description="solution.description"
              :icon="solution.icon"
              :items="solution.items"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { useWindowScroll } from '@vueuse/core'
import TimelineSection from '@/components/TimelineSection.vue'
import FeatureCard from '@/components/FeatureCard.vue'

export default defineComponent({
  name: 'GrowView',
  components: {
    TimelineSection,
    FeatureCard
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
      },
      {
        title: 'Client Management',
        description: 'Build stronger relationships with integrated CRM tools.',
        icon: 'users-cog',
        items: [
          'Contact management',
          'Communication history',
          'Task tracking',
          'Meeting scheduling'
        ]
      },
      {
        title: 'Marketing Tools',
        description: 'Reach more clients with integrated marketing solutions.',
        icon: 'bullhorn',
        items: [
          'Email campaigns',
          'Social media integration',
          'Lead generation',
          'Performance tracking'
        ]
      }
    ]

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
.fade-up {
  animation: fadeUp 0.6s ease-out forwards;
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

video {
  filter: brightness(0.7);
}
</style>