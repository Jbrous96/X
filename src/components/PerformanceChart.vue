<template>
  <div class="relative">
    <svg
      class="w-full h-64"
      :viewBox="`0 0 ${width} ${height}`"
    >
      <!-- Grid lines -->
      <line
        v-for="(tick, i) in yTicks"
        :key="`y-${i}`"
        :x1="padding"
        :y1="yScale(tick)"
        :x2="width - padding"
        :y2="yScale(tick)"
        stroke="#e5e7eb"
        stroke-dasharray="4 4"
      />

      <!-- Revenue line -->
      <path
        :d="revenueLine"
        fill="none"
        stroke="#10b981"
        stroke-width="3"
      />

      <!-- Loans line -->
      <path
        :d="loansLine"
        fill="none"
        stroke="#3b82f6"
        stroke-width="3"
      />

      <!-- X-axis -->
      <g
        v-for="(point, i) in data"
        :key="`x-${i}`"
        :transform="`translate(${xScale(i)}, ${height - padding + 20})`"
      >
        <text
          text-anchor="middle"
          class="text-sm fill-gray-600"
        >
          {{ point.month }}
        </text>
      </g>

      <!-- Y-axis -->
      <g
        v-for="tick in yTicks"
        :key="`label-${tick}`"
        :transform="`translate(${padding - 10}, ${yScale(tick)})`"
      >
        <text
          text-anchor="end"
          alignment-baseline="middle"
          class="text-sm fill-gray-600"
        >
          {{ tick }}
        </text>
      </g>
    </svg>

    <!-- Legend -->
    <div class="flex justify-center space-x-8 mt-8">
      <div class="flex items-center">
        <div class="w-4 h-4 rounded-full bg-green-500 mr-2"></div>
        <span class="text-sm text-gray-600">Revenue</span>
      </div>
      <div class="flex items-center">
        <div class="w-4 h-4 rounded-full bg-tan-500 mr-2"></div>
        <span class="text-sm text-gray-600">Loans</span>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, computed } from 'vue'
import { scaleLinear, line } from 'd3'

export default defineComponent({
  name: 'PerformanceChart',
  props: {
    data: {
      type: Array,
      required: true
    }
  },
  setup(props) {
    const width = 800
    const height = 400
    const padding = 60

    const yTicks = [0, 20, 40, 60, 80, 100, 120]

    const xScale = (i) => padding + (i * (width - 2 * padding)) / (props.data.length - 1)
    const yScale = scaleLinear()
      .domain([0, 120])
      .range([height - padding, padding])

    const revenueLine = computed(() => {
      return line()
        .x((d, i) => xScale(i))
        .y(d => yScale(d.revenue))(props.data)
    })

    const loansLine = computed(() => {
      return line()
        .x((d, i) => xScale(i))
        .y(d => yScale(d.loans))(props.data)
    })

    return {
      width,
      height,
      padding,
      yTicks,
      xScale,
      yScale,
      revenueLine,
      loansLine
    }
  }
})
</script>