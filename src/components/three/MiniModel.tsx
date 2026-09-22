"use client";

import { ContactShadows, Float } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { useIsMobile } from "@/hooks/useMediaQuery";

/** Compact ultra-modern pavilion */
function TinyHouse() {
  const ref = useRef<THREE.Group>(null);
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.2;
  });

  return (
    <Float speed={1} floatIntensity={0.18} rotationIntensity={0.05}>
      <group ref={ref} position={[0, -0.4, 0]} scale={0.92}>
        <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
          <circleGeometry args={[2.3, 48]} />
          <meshStandardMaterial color="#5f7548" roughness={1} />
        </mesh>

        <mesh position={[0, 0.03, 0.05]} receiveShadow>
          <boxGeometry args={[2.6, 0.05, 1.9]} />
          <meshStandardMaterial color="#e4e0d8" roughness={0.8} />
        </mesh>

        {/* Glass ground pavilion */}
        <mesh position={[0, 0.45, 0.55]}>
          <boxGeometry args={[1.6, 0.7, 0.03]} />
          <meshPhysicalMaterial
            color="#f2f7fa"
            transmission={0.85}
            roughness={0.03}
            thickness={0.2}
            transparent
          />
        </mesh>
        {[
          [-0.75, -0.45],
          [0.75, -0.45],
          [-0.75, 0.45],
          [0.75, 0.45],
        ].map(([x, z], i) => (
          <mesh key={i} position={[x, 0.45, z]}>
            <boxGeometry args={[0.04, 0.7, 0.04]} />
            <meshStandardMaterial color="#2a2a2e" metalness={0.8} roughness={0.3} />
          </mesh>
        ))}

        {/* Floating white mass */}
        <mesh position={[0, 1.15, 0]} castShadow>
          <boxGeometry args={[1.9, 0.7, 1.2]} />
          <meshStandardMaterial color="#f7f5f1" roughness={0.55} metalness={0.08} />
        </mesh>
        <mesh position={[0, 1.15, 0.61]}>
          <boxGeometry args={[1.3, 0.45, 0.03]} />
          <meshPhysicalMaterial
            color="#f2f7fa"
            transmission={0.8}
            roughness={0.03}
            thickness={0.2}
            transparent
          />
        </mesh>

        {/* Charcoal core */}
        <mesh position={[1.1, 0.7, 0]} castShadow>
          <boxGeometry args={[0.5, 1.15, 0.9]} />
          <meshStandardMaterial color="#1e1e22" roughness={0.4} metalness={0.2} />
        </mesh>

        {/* Thin cantilever roof */}
        <mesh position={[0.15, 1.55, 0.05]} castShadow>
          <boxGeometry args={[2.4, 0.05, 1.55]} />
          <meshStandardMaterial color="#2a2a2e" metalness={0.85} roughness={0.28} />
        </mesh>

        {/* Timber screen */}
        {Array.from({ length: 6 }).map((_, i) => (
          <mesh key={i} position={[1.1, 0.35 + i * 0.1, 0.48]}>
            <boxGeometry args={[0.52, 0.035, 0.03]} />
            <meshStandardMaterial color={i % 2 ? "#9a7b5a" : "#c4a484"} roughness={0.6} />
          </mesh>
        ))}

        <pointLight position={[0, 0.6, 0]} intensity={0.7} color="#ffe2b8" distance={2.5} />
        <ContactShadows position={[0, 0.01, 0]} opacity={0.45} scale={5} blur={2.2} far={2} />
      </group>
    </Float>
  );
}

export function MiniModel() {
  const isMobile = useIsMobile();
  return (
    <Canvas
      dpr={isMobile ? [1, 1.2] : [1, 1.5]}
      camera={{ position: [2.9, 1.85, 3.4], fov: 34 }}
      gl={{ antialias: !isMobile, toneMapping: THREE.ACESFilmicToneMapping }}
    >
      <color attach="background" args={["#E0DDCF"]} />
      <ambientLight intensity={0.38} />
      <directionalLight position={[3, 6, 2]} intensity={1.3} color="#fff5e8" />
      <directionalLight position={[-2, 2, -1]} intensity={0.4} color="#a8c0d8" />
      <TinyHouse />
    </Canvas>
  );
}
