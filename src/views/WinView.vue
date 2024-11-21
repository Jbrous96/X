<template>
  <div class="pt-20">
    <section 
      class="relative min-h-[80vh] flex items-center overflow-hidden"
      :style="{ transform: `translateY(${scrollY * 0.3}px)` }"
    >
      <div class="absolute inset-0 bg-gradient-to-r from-gray-900/70 to-gray-900/40 z-10"></div>
      <div
        class="absolute inset-0 bg-center bg-cover"
        :style="{ backgroundImage: 'url(@/assets/success-bg.jpg)' }">
        </div>
      <div class="container mx-auto px-4 relative z-20">
        <div class="max-w-3xl">
          <h1 class="text-5xl md:text-7xl font-bold text-white mb-8">
            Win More Business
          </h1>
          <p class="text-xl text-white/90 mb-12">
            Leverage our powerful platform to close more deals and increase your revenue
          </p>
          <button class="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
            Start Winning Today
          </button>
        </div>
      </div>
    </section>

    <section class="py-24 bg-white">
      <div class="container mx-auto px-4">
        <success-stories :stories="successStories" />
      </div>
    </section>

    <section class="py-24 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl font-bold text-center mb-16">Performance Metrics</h2>
          <performance-chart :data="performanceData" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { useWindowScroll } from '@vueuse/core'
import SuccessStories from '@/components/SuccessStories.vue'
import PerformanceChart from '@/components/PerformanceChart.vue'

export default defineComponent({
  name: 'WinView',
  components: {
    SuccessStories,
    PerformanceChart
  },
  setup() {
    const { y: scrollY } = useWindowScroll()

    const successStories = [
      {
        title: 'Increased Efficiency',
        description: 'Reduced loan processing time by 45% through automation',
        icon: 'clock'
      },
      {
        title: 'Higher Conversion',
        description: '32% increase in lead-to-customer conversion rate',
        icon: 'chart-line'
      },
      {
        title: 'Better Engagement',
        description: '78% improvement in customer engagement metrics',
        icon: 'users'
      }
    ]

    const performanceData = [
      { month: 'Jan', revenue: 65, loans: 33 },
      { month: 'Feb', revenue: 72, loans: 38 },
      { month: 'Mar', revenue: 85, loans: 42 },
      { month: 'Apr', revenue: 93, loans: 47 },
      { month: 'May', revenue: 98, loans: 51 },
      { month: 'Jun', revenue: 110, loans: 55 }
    ]

    return {
      scrollY,
      successStories,
      performanceData
    }
  }
})
</script>
