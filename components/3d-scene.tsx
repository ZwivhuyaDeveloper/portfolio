"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment, Float, Text3D, Center } from "@react-three/drei"
import { useRef, useState } from "react"
import type { Mesh } from "three"
import { Badge } from "@/components/ui/badge"

function FloatingCube({
  position,
  color,
  scale = 1,
}: { position: [number, number, number]; color: string; scale?: number }) {
  const meshRef = useRef<Mesh>(null)

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
      </mesh>
    </Float>
  )
}

function FloatingSphere({
  position,
  color,
  scale = 1,
}: { position: [number, number, number]; color: string; scale?: number }) {
  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1.5}>
      <mesh position={position} scale={scale}>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshStandardMaterial color={color} metalness={0.9} roughness={0.1} />
      </mesh>
    </Float>
  )
}

function Scene3D() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#4f46e5" />

      {/* Floating geometric shapes */}
      <FloatingCube position={[-3, 2, 0]} color="#3b82f6" scale={0.8} />
      <FloatingSphere position={[3, -1, 2]} color="#8b5cf6" scale={0.6} />
      <FloatingCube position={[0, 3, -2]} color="#06b6d4" scale={0.5} />
      <FloatingSphere position={[-2, -2, 1]} color="#f59e0b" scale={0.7} />
      <FloatingCube position={[4, 1, -1]} color="#ef4444" scale={0.6} />

      {/* Central 3D Text */}
      <Center>
        <Float speed={0.5} rotationIntensity={0.2} floatIntensity={0.5}>
          <Text3D
            font="https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/fonts/helvetiker_regular.typeface.json"
            size={1.2}
            height={0.2}
            curveSegments={12}
            bevelEnabled
            bevelThickness={0.02}
            bevelSize={0.02}
            bevelOffset={0}
            bevelSegments={5}
          >
            3D DESIGN
            <meshStandardMaterial color="#ffffff" metalness={0.8} roughness={0.2} />
          </Text3D>
        </Float>
      </Center>

      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      <Environment preset="city" />
    </>
  )
}

export default function Scene3DComponent() {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div className="w-full h-96 relative rounded-xl overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }} onCreated={() => setIsLoaded(true)} className="w-full h-full">
        <Scene3D />
      </Canvas>

      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
          <div className="text-gray-400">Loading 3D Scene...</div>
        </div>
      )}

      <div className="absolute top-4 left-4">
        <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0">Interactive 3D</Badge>
      </div>

      <div className="absolute bottom-4 right-4">
        <div className="text-xs text-gray-400 bg-gray-900/80 backdrop-blur-sm px-3 py-1 rounded-full">
          Drag to rotate • Auto-rotating
        </div>
      </div>
    </div>
  )
}
