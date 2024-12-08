import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './public/src'),
      'three': 'three'
    }
  },
  root: './public',  // This tells Vite where to find index.html
  build: {
    sourcemap: true,
    outDir: '../dist', // Build outside the public directory
    emptyOutDir: true
  },
  publicDir: 'assets'
})

// import { defineConfig } from 'vite'
// import vue from '@vitejs/plugin-vue'
// import path from 'path'

// export default defineConfig({
//   plugins: [vue()],
//   resolve: {
//     alias: {
//       '@': path.resolve(__dirname, '.public/src'),
//       'three': 'three'
//     }
//   },
//   build: {
//     sourcemap: true,
//     outDir: 'dist',
//     publicDir: 'public',
//     assetsDir: 'assets',
//     rollupOptions: {
//       input: {
//         main: path.resolve(__dirname, 'index.html')
//       },
//       output: {
//         manualChunks: {
//           'vendor': ['vue', 'three'],
//           'components': ['./src/components'],
//           'layouts': ['./src/layouts']
//         }
//       }
//     }
//   },
//   server: {
//     port: 3000,
//     open: true
//   },
//   optimizeDeps: {
//     include: ['three']
//   },
//   css: {
//     preprocessorOptions: {
//       scss: {
//         additionalData: `@import "@/assets/styles/main.css";`
//       }
//     }
//   }
// })
