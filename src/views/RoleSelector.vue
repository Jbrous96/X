<template>
  <div class="page-container">
    <!-- Initial white screen -->
    <div class="loading-screen" :class="{ 'animate-complete': loadingComplete }">
      <div class="approaching-sphere" :class="{ 'impact': loadingComplete }">
        <spinning-logo-sphere></spinning-logo-sphere>
      </div>
    </div>

    <!-- Main content -->
    <div class="main-content" :class="{ 'show': loadingComplete }">
      <div class="split-container" @mousemove="handleMouseMove">
        <h1 class="main-prompt" :class="{ 'fade-out': isHovering }">
          Please select your role for the best experience
        </h1>

        <div class="split-section left" @mouseenter="handleHover('production')" @mouseleave="handleHover(null)"
          @click="selectRole('production')">
          <h2>Production</h2>
          <p>Access powerful tools designed for originators,procoessors & underwriters</p>
        </div>

        <div class="sphere-wrapper" style="{
          transform: `translate(-50%, -50%) perspective(1000px) 
                     rotateY(${mouseX * 0.01}deg) 
                     rotateX(${-mouseY * 0.01}deg)`
        }">
          <spinning-logo-sphere></spinning-logo-sphere>
        </div>

        <div class="split-section right" @mouseenter="handleHover('executive')" @mouseleave="handleHover(null)"
          @click="selectRole('executive')">
          <h2>Leadership</h2>
          <p>Comprehensive solutions for mortgage company leaders</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import SpinningLogoSphere from '@/components/SpinningLogoSphere.vue';

export default {
  name: 'RoleSelector',
  components: {
    SpinningLogoSphere
  },
  setup() {
    const router = useRouter();
    const hoveringRole = ref(null);
    const isHovering = ref(false);
    const mouseX = ref(0);
    const mouseY = ref(0);
    const loadingComplete = ref(false);

    onMounted(() => {
      setTimeout(() => {
        loadingComplete.value = true;
      }, 500);
    });

    const handleMouseMove = (e) => {
      mouseX.value = e.clientX - window.innerWidth / 2;
      mouseY.value = e.clientY - window.innerHeight / 2;
    };

    const handleHover = (role) => {
      hoveringRole.value = role;
      isHovering.value = !!role;
    };

    const selectRole = (role) => {
      router.push(`/${role}`);
    };

    return {
      loadingComplete,
      hoveringRole,
      isHovering,
      mouseX,
      mouseY,
      handleMouseMove,
      handleHover,
      selectRole
    };
  }
};
</script>

<style scoped>
@keyframes sparkle {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
    transform: rotate(180deg);
  }

  100% {
    background-position: 0% 50%;
    transform: rotate(360deg);
  }
}

.page-container {
  /* position: relative; */
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.loading-screen {
  position: fixed;
  inset: 0;
  background: white;
  z-index: 100;
  transition: opacity 0.8s ease-out;
}

.loading-screen .animate-complete {
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease-out 0.5s;
}

.approaching-sphere {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) scale(0.01) translateZ(-200px);
  transition: transform .8s cubic-bezier(0.19, 1, 0.22, 1);
  will-change: transform;
}

.approaching-sphere.impact {
  transform: translate(-50%, -50%) scale(1) translateZ(0);
  animation: impactShockwave 3.5s ease-out;
}

@keyframes impactShockwave {
  0% {
    transform: translate(-50%, -50%) scale(0.8);
    filter: brightness(1.5);
  }

  20% {
    transform: translate(-50%, -50%) scale(1.1);
    filter: brightness(1.8);
  }

  40% {
    transform: translate(-50%, -50%) scale(0.95);
    filter: brightness(1.2);
  }

  100% {
    transform: translate(-50%, -50%) scale(1);
    filter: brightness(1);
  }
}

@keyframes containerShockwave {
  0% {
    transform: scale(0.8);
    filter: brightness(1.5);
  }

  50% {
    transform: scale(1.8);
    filter: brightness(2.2);
  }

  100% {
    transform: scale(1);
    filter: brightness(1);
  }
}

.main-content {
  width: 100%;
  opacity: 0;
  transform: scale(1.1);
  transition: all 0.5s ease-out;
  filter: blur(10px);
}

.main-content.show {
  opacity: 1;
  transform: scale(1);
  filter: blur(0);
  animation: containerShockwave 0.5s ease-out;
}

.loading-screen::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background: radial-gradient(circle, oklch(85.89% 0.2211 127.06 / 0.2) 0%, transparent 40%);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.4;
  animation: ripple 0.6s ease-out forwards;
}

.aniimate-screen::after {
  animation: ripple 0.6s ease-out forwards;
}

@keyframes ripple {
  0% {
    width: 0;
    height: 0;
    opacity: 1;
  }

  100% {
    width: 300vw;
    height: 300vw;
    opacity: 0;
  }
}

.main-content {
  opacity: 0;
  transition: opacity 0.6s ease-out;
}

.main-content .show {
  opacity: 1;
}

.split-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  background: oklch(92.88% 0.0401 132.36);
}

.sphere-wrapper {
  filter: brightness(1.55) saturate(1.3);
  position: absolute;
  left: 50%;
  top: 50%;
  width: 700px;
  height: 700px;
  z-index: 10;
  transition: transform 1.48s ease-out;
  will-change: transform;
}

.split-section {
  flex: 1;
  width: 50vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  color: #fff;
  transition: all 0.4s ease;
  padding: 2rem;
}

.left {
  width: 100%;
  --hue: 130;
  --bg: oklch(83% .3 var(--hue));
  --text: linear-gradient(45deg, oklch(60% 0.12 125.6), oklch(65% 0.14 125.7), oklch(55% 0.13 125.8));
  --shadow: oklch(25% .2 var(--hue));
  --highlight: oklch(58% .05 var(--hue));
  background-color: var(--bg);
  color: var(--text);
}

.right {
  width: 100%;
  background: oklch(12.33% 0 125.81);
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}

.split-section:hover h2 {
  transform: scale(1.1);
}

h2 {
  font-size: 12rem;
  margin-bottom: 1rem;
  transition: transform 0.3s ease;
  font-weight: 800;
  text-align: center;
  line-height: .815;
  letter-spacing: -.15ch !important;
  text-shadow:
    0 .15ch 15px var(--shadow),
    0 -2px 0 var(--highlight);

}

.split-section:hover h2 {
  transform: scale(1.1);
}

p {
  font-size: 1.2rem;
  opacity: 0.7;
  text-align: center;
  max-width: 80%;
  transition: opacity 0.3s ease;
  line-height: 1.5;
}

.split-section:hover p {
  opacity: 1;
}

.main-prompt {
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 2.5rem;
  color: #fff;
  text-align: center;
  z-index: 10;
  transition: opacity 0.3s ease;
  width: 100%;
  padding: 0 2rem;
}

.main-prompt.fade-out {
  opacity: 0.3;
}

/* Media Queries for Responsiveness */
@media (max-width: 768px) {
  .split-container {
    flex-direction: column;
  }

  .split-section {
    width: 100vw;
    height: 50vh;
  }

  h2 {
    font-size: 2rem;
  }

  p {
    font-size: 1rem;
  }

  .main-prompt {
    font-size: 1.8rem;
  }
}

/* New styles */
@layer demo {
  .highlighted-text-shadow {
    text-shadow:
      /* regular text-shadow */
      0 .15ch 15px var(--shadow),
      /* text-shadow highlight */
      0 -2px 0 var(--highlight);
  }
}

@layer demo.support {
  :root {
    --hue: 130;
    --bg: oklch(85% .3 var(--hue));
    --text: linear-gradient(45deg, oklch(60% 0.12 125.6), oklch(65% 0.14 125.7), oklch(55% 0.13 125.8));
    --shadow: oklch(25% .2 var(--hue));
    --highlight: oklch(58% .05 var(--hue));
  }



  html {
    background-color: var(--bg);
    color: var(--text);
  }

  body {
    min-block-size: 100%;
    font-family: 'Bulgatry';
    place-content: center;
  }

  h1 {
    font-size: 15vi;
    letter-spacing: -.15ch;
    line-height: .75;
  }

  small {
    max-inline-size: 30ch;
  }
}
</style>
