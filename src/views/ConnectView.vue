<template>
  <div class="pt-20">
    <section class="relative min-h-[60vh] flex items-center overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-r from-gray-900/70 to-gray-900/40 z-10"></div>
      <div
        class="absolute inset-0 bg-center bg-cover"
        :style="{
          backgroundImage: 'url(@/assets/connect-bg.jpg)',
          transform: `translateY(${scrollY * 0.3}px)`
        }"
      ></div>
      <div class="container mx-auto px-4 relative z-20">
        <h1 class="text-5xl md:text-7xl font-bold text-white mb-6">Connect & Grow</h1>
        <p class="text-xl text-white/90 max-w-2xl">
          Stay connected with your team, clients, and prospects through our comprehensive suite of tools.
        </p>
      </div>
    </section>

    <section class="py-24 bg-white">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md: grid-cols-2 gap-16">
          <div
            v-for="(feature, index) in features"
            :key="index"
            class="reveal-card"
            :class="{ 'opacity-0': !isVisible[index] }"
            ref="cards"
          >
            <h3 class="text-2xl font-bold mb-4">{{ feature.title }}</h3>
            <p class="text-gray-600 mb-6">{{ feature.description }}</p>
            <ul class="space-y-4">
              <li
                v-for="(item, i) in feature.items"
                :key="i"
                class="flex items-start space-x-3"
              >
                <font-awesome-icon
                  icon="check-circle"
                  class="text-green-500 mt-1"
                />
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'
import { useWindowScroll } from '@vueuse/core'

export default defineComponent({
  name: 'ConnectView',
  setup() {
    const { y: scrollY } = useWindowScroll()
    const cards = ref([])
    const isVisible = ref([])

    const features = [
      {
        title: 'Seamless Communication',
        description: 'Stay connected with your team and clients through integrated communication tools.',
        items: [
          'Real-time chat and messaging',
          'Video conferencing integration',
          'Document sharing and collaboration',
          'Task management and tracking'
        ]
      },
      {
        title: 'Data-Driven Insights',
        description: 'Make informed decisions with comprehensive analytics and reporting.',
        items: [
          'Performance dashboards',
          'Custom report generation',
          'Trend analysis and forecasting',
          'ROI tracking and optimization'
        ]
      }
    ]

    onMounted(() => {
      isVisible.value = new Array(features.length).fill(false)
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const index = cards.value.indexOf(entry.target)
              if (index !== -1) {
                isVisible.value[index] = true
              }
            }
          })
        },
        { threshold: 0.2 }
      )

      cards.value.forEach((card) => observer.observe(card))
    })

    return {
      scrollY,
      features,
      cards,
      isVisible
    }
  }
})
</script>