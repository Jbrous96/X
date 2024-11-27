<template>
  <div class="text-background">
    <div class="rail rail-top">
      <div class="rail_container">
        <div class="rail_clip">
          <div class="rail_color">
            <div class="rail_gradients">
              <div class="rail_gradient -firstshape"></div>
            </div>
          </div>
        </div>
        <svg width="100%" height="100%" viewBox="0 0 1200 120" class="rail_sizing">
          <clipPath id="textPath1" clipPathUnits="objectBoundingBox">
            <text x="50%" y="50%" text-anchor="middle" class="massive-text">
              AUTOMATE
            </text>
          </clipPath>
        </svg>
      </div>
    </div>
    <div class="rail rail-middle">
      <div class="rail_container">
        <div class="rail_clip">
          <div class="rail_color">
            <div class="rail_gradients">
              <div class="rail_gradient -secondshape"></div>
            </div>
          </div>
        </div>
        <svg width="1200" height="120" viewBox="0 0 1200 120" class="rail_sizing">
          <clipPath id="textPath2" clipPathUnits="objectBoundingBox">
            <text x="50%" y="50%" text-anchor="middle" class="massive-text">
              SIMPLIFY
            </text>
          </clipPath>
        </svg>
      </div>
    </div>

    <!-- Third Row -->
    <div class="rail rail-bottom">
      <div class="rail_container">
        <div class="rail_clip">
          <div class="rail_color">
            <div class="rail_gradients">
              <div class="rail_gradient -thirdshape"></div>
            </div>
          </div>
        </div>
        <svg width="1200" height="120" viewBox="0 0 1200 120" class="rail_sizing">
          <clipPath id="textPath3" clipPathUnits="objectBoundingBox">
            <text x="50%" y="50%" text-anchor="middle" class="massive-text">
              ANALYZE
            </text>
          </clipPath>
        </svg>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from 'vue';
import { useWindowScroll } from '@vueuse/core';

export default defineComponent({
  name: 'AnimatedBackground',
  setup() {
    // If you want to react to window scrolls, you can define scroll-related logic here
    const { x, y } = useWindowScroll();

    // You can return any reactive properties or methods from setup
    return {
      x,
      y
    };
  }
});
</script>

<style scoped>
/* Assuming this CSS goes in AnimatedBackground.vue or a relevant stylesheet */
.animated-background {
  position: fixed;  /* Use fixed to make it cover the viewport */
  top: 0;
  left: 0;
  width: 100vw;    /* Full viewport width */
  height: 100vh;   /* Full viewport height */
  z-index: 0;      /* Behind other content */
}
.text-background {
  position: fixed;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  z-index: -1;
  background: #000;
  overflow: hidden;
}

.rail {
  position: relative;
  width: 100%;
  height: 33.33vh;
  overflow: hidden;
}

.rail_container {
  position: relative;
  width: 100%;
  height: 100%;
}

.rail_clip {
  position: absolute;
  inset: 0;
  clip-path: url(#textPath1);
}

.rail_color {
  position: absolute;
  inset: 0;
  background-color: #90ffa6;
}

.rail-top .rail_color {
  animation: slide-left 20s linear infinite;
}

.rail-middle .rail_color {
  animation: slide-right 25s linear infinite;
}

.rail-bottom .rail_color {
  animation: slide-left 22s linear infinite;
}

.rail_gradient {
  background: radial-gradient(
    circle at center,
    oklch(85.89% 0.2211 127.06) 0%,
    oklch(85.89% 0.2211 127.06 / 0.7) 30%,
    oklch(85.89% 0.2211 127.06 / 0.3) 50%,
    transparent 70%
  );
}

.rail_gradient.-firstshape {
  background: radial-gradient(
    circle at center,
    oklch(85.89% 0.2211 127.06) 0%,
    transparent 70%
  );
  animation: float-gradient 8s ease-in-out infinite;
}

.rail_gradient.-secondshape {
  background: radial-gradient(
    circle at center,
    oklch(85.89% 0.2211 127.06 / 0.8) 0%,
    transparent 70%
  );
  animation: float-gradient 10s ease-in-out infinite reverse;
}

.rail_gradient.-thirdshape {
  background: radial-gradient(
    circle at center,
    oklch(85.89% 0.2211 127.06 / 0.9) 0%,
    transparent 70%
  );
  animation: float-gradient 9s ease-in-out infinite;
}

.massive-text {
  font-size: 15vw;
  font-weight: 900;
  font-family: sans-serif;
  text-transform: uppercase;
  fill: white;
}

@keyframes slide-left {
  from { transform: translateX(0%); }
  to { transform: translateX(-100%); }
}

@keyframes slide-right {
  from { transform: translateX(-100%); }
  to { transform: translateX(0%); }
}

@keyframes float-gradient {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(-20px, -20px); }
}

/* Ensure each row uses its own clip path */
.rail-top .rail_clip { clip-path: url(#textPath1); }
.rail-middle .rail_clip { clip-path: url(#textPath2); }
.rail-bottom .rail_clip { clip-path: url(#textPath3); }

/* Make sure background stays behind sphere */
:deep(.sphere-wrapper) {
  z-index: 10;
}
</style>