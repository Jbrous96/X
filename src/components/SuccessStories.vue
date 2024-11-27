<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
    <div
      v-for="(story, index) in stories"
      :key="index"
      class="bg-white p-8 rounded-lg shadow-lg transform hover:-translate-y-2 transition-all duration-300"
      :class="{ 'opacity-0': !isVisible[index] }"
      ref="storyRefs"
    >
      <div class="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-6">
        <font-awesome-icon
          :icon="story.icon"
          class="text-2xl text-green-500"
        />
      </div>
      <h3 class="text-xl font-bold mb-4">{{ story.title }}</h3>
      <p class="text-gray-600">{{ story.description }}</p>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'

export default defineComponent({
  name: 'SuccessStories',
  props: {
    stories: {
      type: Array,
      required: true
    }
  },
  setup(props) {
    const storyRefs = ref([])
    const isVisible = ref([])

    onMounted(() => {
      isVisible.value = new Array(props.stories.length).fill(false)
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const index = storyRefs.value.indexOf(entry.target)
              if (index !== -1) {
                isVisible.value[index] = true
              }
            }
          })
        },
        { threshold: 0.2 }
      )

      storyRefs.value.forEach((story) => observer.observe(story))
    })

    return {
      storyRefs,
      isVisible
    }
  }
})
</script>