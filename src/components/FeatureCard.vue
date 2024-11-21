<template>
  <div
    class="bg-white rounded-lg shadow-lg p-8 transform hover:-translate-y-2 transition-all duration-300"
    :class="{ 'opacity-0': !isVisible }"
    ref="cardRef"
  >
    <div class="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-6">
      <font-awesome-icon
        :icon="icon"
        class="text-2xl text-green-500"
      />
    </div>
    <h3 class="text-xl font-bold mb-4">{{ title }}</h3>
    <p class="text-gray-600 leading-relaxed">{{ description }}</p>
    <ul v-if="items" class="mt-6 space-y-3">
      <li
        v-for="(item, index) in items"
        :key="index"
        class="flex items-start space-x-3"
      >
        <font-awesome-icon
          icon="check-circle"
          class="text-green-500 mt-1 flex-shrink-0"
        />
        <span class="text-gray-600">{{ item }}</span>
      </li>
    </ul>
    <div v-if="$slots.default" class="mt-6">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

export default defineComponent({
  name: 'FeatureCard',
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    icon: {
      type: [String, Array],
      required: true
    },
    items: {
      type: Array,
      default: () => []
    }
  },
  setup() {
    const cardRef = ref(null)
    const isVisible = ref(false)

    onMounted(() => {
      const { stop } = useIntersectionObserver(
        cardRef,
        ([{ isIntersecting }]) => {
          if (isIntersecting) {
            isVisible.value = true
            stop()
          }
        },
        {
          threshold: 0.2,
          root: null,
          rootMargin: '0px'
        }
      )
    })

    return {
      cardRef,
      isVisible
    }
  }
})
</script>

<style scoped>
.fade-in {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}
</style>