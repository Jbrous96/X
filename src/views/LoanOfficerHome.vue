<template>
  <div>
    <h1>Loan Officer Home</h1>
    <SuccessStories />
    <Timeline />
  </div>
</template>
<script>
import SuccessStories from '@/components/SuccessStories.vue'
import Timeline from '@/components/Timeline.vue'
export default {
  name: 'LoanOfficer',
  components: {
    SuccessStories,
    Timeline
  }
  // You can add other component options here (data, methods, etc.
}
</script>