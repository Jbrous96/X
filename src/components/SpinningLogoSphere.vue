<template>
  <div ref="container"></div>
</template>

<script>
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export default {
  mounted() {
    const container = this.$refs.container;
    let scene, camera, renderer, sphere;

    // Initialize scene
    scene = new THREE.Scene();
    // Remove or comment out the background color setting
    // scene.background = new THREE.Color(0x000000); // Set background color

    // Initialize camera
    camera = new THREE.PerspectiveCamera(
      38,
      container.clientWidth / container.clientHeight,
      0.4,
      9000
    );

    // Initialize renderer
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.shadowMap.enabled = true; // Enable shadows
    container.appendChild(renderer.domElement);

    // Create sphere geometry
/*************  ✨ Codeium Command 🌟  *************/
    const geometry = new THREE.SphereGeometry(2.9, 64, 64);
    // const geometry = new THREE.SphereGeometry(2, 64, 64);
/******  9f44face-6bd9-4564-b5a1-96a4bdfc4556  *******/

    // Load texture
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load(
      '/assets/wl2.png',
      (texture) => {
        texture.minFilter = THREE.LinearMipMapLinearFilter;
        texture.magFilter = THREE.LinearFilter;
        texture.anisotropy = 16; 
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.set(1, 1);
        texture.format = THREE.RGBAFormat;
        texture.generateMipmaps = true;
        texture.premultiplyAlpha = true;
      },
      undefined,
      (error) => {
        console.error('An error occurred loading the texture:', error);
      }
    );

    // Create material with the texture
    const material = new THREE.MeshStandardMaterial({
      map: texture,
      brightness: .9,
      metalness: 0.34,
      roughness: 0.1,
      envMapIntensity: .19
    });

    // Create sphere mesh
    sphere = new THREE.Mesh(geometry, material);
    sphere.castShadow = true; // Enable shadow casting
    scene.add(sphere);

    // Add lights
    const ambientLight = new THREE.AmbientLight(0xfefeff, 1);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xDEDEDE, 10);
    pointLight.position.set(-90, 10000, 9.25);
    pointLight.castShadow = true; // Enable shadow casting
    scene.add(pointLight);

    // Add more lights
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(-500, 10, 9990.5);
    directionalLight.castShadow = true; // Enable shadow casting
    scene.add(directionalLight);

    // Add controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true; // Enable damping (inertia)
    controls.dampingFactor = 0.25;
    controls.screenSpacePanning = false;
    controls.maxPolarAngle = Math.PI / 2;

    // Position camera
    camera.position.z = 12;

    // Render loop
    const animate = () => {
      requestAnimationFrame(animate);
      sphere.rotation.y += 0.01;
      controls.update(); // Update controls
      renderer.render(scene, camera);
    };
    animate();
  }
};
</script>

<style>
  div {
    width: 100%;
    height: 100%;
  }
</style>