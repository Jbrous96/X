<template>
  <div class="dashboard-container">
    <div class="dashboard-card">
      <img 
        src="https://i.ibb.co/L5psFRh/Screenshot-2024-11-12-at-11-43-27-AM.png" 
        alt="Dashboard Preview" 
        class="dashboard-image"
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DashboardContainer'
})
</script>

<style scoped>
.dashboard-container {
  position: relative;
  width: 100%;
  height: 300px;
  perspective: 2000px;
  margin-top: 2rem;
}

.dashboard-card {
  position: absolute;
  width: 500px;
  height: 200px;
  left: 20%;
  top: 50%;
  transform-origin: center center;
  transform: rotateX(75deg) rotateZ(5deg) translateY(-50%) scale(1.2);
  transform-style: preserve-3d;
  border-radius: 12px;
  box-shadow: 
    0 0 0 2px rgba(255, 255, 255, 0.1),
    0 15px 50px -10px rgba(0, 0, 0, 0.3),
    0 25px 20px -15px rgba(0, 0, 0, 0.2);
  transition: transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
  background: white;
  overflow: hidden;
}

.dashboard-card:hover {
  transform: rotateX(65deg) rotateZ(10deg) translateY(-50%) scale(1.25);
  box-shadow: 
    0 0 0 2px rgba(255, 255, 255, 0.2),
    0 30px 100px -20px rgba(0, 0, 0, 0.4),
    0 50px 40px -30px rgba(0, 0, 0, 0.3);
}

.dashboard-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  border-radius: 12px;
}

@media (max-width: 768px) {
  .dashboard-card {
    width: 90%;
    left: 5%;
    transform: rotateX(75deg) rotateZ(5deg) translateY(-50%) scale(0.9);
  }
}
</style>