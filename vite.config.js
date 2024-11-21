import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    vue(),
    react({
      include: /\.(jsx|tsx|js)$/,
    })
  ],
  resolve: {
    alias: {
      '@': '/src',
      'three': 'three'
    }
  },
  optimizeDeps: {
    include: ['three', '@react-three/fiber', '@react-three/drei', 'react', 'react-dom']
  }
})