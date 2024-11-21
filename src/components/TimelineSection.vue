<template>
  <div class="relative">
    <div class="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gray-200"></div>
    <div class="space-y-16">
      <div v-for="(milestone, index) in milestones" :key="index" class="relative"
        :class="{ 'opacity-0': !isVisible[index] }" ref="milestoneRefs">
        <div class="flex items-center" :class="index % 2 === 0 ? 'flex-row-reverse' : ''">
          <div class="w-5/12"></div>
          <div class="w-2/12 flex justify-center">
            <div class="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
              <font-awesome-icon :icon="milestone.icon" class="text-white" />
            </div>
          </div>
          <div class="w-5/12 p-6 bg-white rounded-lg shadow-lg" :class="index % 2 === 0 ? 'text-right' : ''">
            <h3 class="text-xl font-bold mb-2">{{ milestone.title }}</h3>
            <p class="text-gray-600">{{ milestone.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { defineComponent, ref, onMounted } from 'vue'

  export default defineComponent({
    name: 'TimelineSection',
    props: {
      milestones: {
        type: Array,
        required: true
      }
    },
    setup(props) {
      const milestoneRefs = ref([])
      const isVisible = ref([])

      onMounted(() => {
        isVisible.value = new Array(props.milestones.length).fill(false)
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                const index = milestoneRefs.value.indexOf(entry.target)
                if (index !== -1) {
                  isVisible.value[index] = true
                }
              }
            })
          },
          { threshold: 0.2 }
        )

        milestoneRefs.value.forEach((milestone) => observer.observe(milestone))
      })

      return {
        milestoneRefs,
        isVisible
      }
    }
  })
</script>