import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const DashboardDisplay = () => {
  const meshRef = useRef()
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1
    }
  })

  const texture = new THREE.TextureLoader().load('/assets/dashboard-preview.jpg')
  texture.encoding = THREE.sRGBEncoding

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <planeGeometry args={[16, 9]} />
      <meshStandardMaterial 
        map={texture}
        side={THREE.DoubleSide}
      />
    </mesh>
  )
}

export default function DashboardScene() {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Canvas>
        <ambientLight intensity={1} />
        <pointLight position={[10, 10, 10]} />
        <DashboardDisplay />
      </Canvas>
    </div>
  )
}