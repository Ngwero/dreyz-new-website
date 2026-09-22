"use client";

import { ContactShadows, Environment, Float } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { useIsMobile } from "@/hooks/useMediaQuery";
import { useMousePosition } from "@/hooks/useMousePosition";
import { CanvasWrapper } from "./CanvasWrapper";

function ArchitecturalMass({ mouse, simplified }: { mouse: { x: number; y: number }; simplified: boolean }) {
  const group = useRef<THREE.Group>(null);
  const materials = useMemo(
    () => ({
      concrete: new THREE.MeshStandardMaterial({
        color: "#8f8a82",
        roughness: 0.82,
        metalness: 0.08,
      }),
      dark: new THREE.MeshStandardMaterial({
        color: "#2a2826",
        roughness: 0.55,
        metalness: 0.25,
      }),
      glass: new THREE.MeshPhysicalMaterial({
        color: "#d8e0e4",
        transmission: simplified ? 0.2 : 0.75,
        opacity: 1,
        metalness: 0,
        roughness: 0.12,
        thickness: 0.6,
        transparent: true,
      }),
      bronze: new THREE.MeshStandardMaterial({
        color: "#ff8200",
        roughness: 0.35,
        metalness: 0.7,
      }),
    }),
    [simplified]
  );

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.elapsedTime;
    // Slow idle rotation + mouse parallax
    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      t * 0.08 + mouse.x * 0.25,
      0.04
    );
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      mouse.y * 0.12,
      0.04
    );
    group.current.position.y = Math.sin(t * 0.5) * 0.05;
  });

  return (
    <group ref={group} position={[0, -0.4, 0]}>
      {/* Base plinth */}
      <mesh position={[0, -0.85, 0]} castShadow receiveShadow material={materials.dark}>
        <boxGeometry args={[3.6, 0.18, 2.4]} />
      </mesh>

      {/* Primary volume */}
      <mesh position={[-0.35, 0.1, 0]} castShadow receiveShadow material={materials.concrete}>
        <boxGeometry args={[2.2, 1.8, 1.5]} />
      </mesh>

      {/* Cantilever slab */}
      <mesh position={[0.85, 0.35, 0.1]} castShadow material={materials.dark}>
        <boxGeometry args={[1.6, 0.12, 1.8]} />
      </mesh>

      {/* Vertical tower */}
      <mesh position={[1.15, 0.85, -0.2]} castShadow material={materials.concrete}>
        <boxGeometry args={[0.7, 1.4, 0.7]} />
      </mesh>

      {/* Glass volume */}
      <mesh position={[-0.2, 0.25, 0.85]} castShadow material={materials.glass}>
        <boxGeometry args={[1.1, 1.2, 0.35]} />
      </mesh>

      {/* Bronze accent fin */}
      <mesh position={[-1.35, 0.4, 0.2]} castShadow material={materials.bronze}>
        <boxGeometry args={[0.08, 1.4, 1.1]} />
      </mesh>

      {!simplified && (
        <>
          {/* Courtyard void suggestion */}
          <mesh position={[0.2, 0.55, -0.55]} material={materials.dark}>
            <boxGeometry args={[0.9, 0.9, 0.35]} />
          </mesh>
          {/* Roof plane */}
          <mesh position={[-0.2, 1.12, 0.1]} castShadow material={materials.dark}>
            <boxGeometry args={[2.6, 0.06, 1.9]} />
          </mesh>
        </>
      )}
    </group>
  );
}

function Scene() {
  const mouse = useMousePosition(1);
  const isMobile = useIsMobile();

  return (
    <>
      <color attach="background" args={["#f6f4f1"]} />
      <ambientLight intensity={0.55} />
      <directionalLight
        position={[5, 8, 4]}
        intensity={1.2}
        castShadow={!isMobile}
        shadow-mapSize={[1024, 1024]}
      />
      <directionalLight position={[-4, 2, -2]} intensity={0.35} color="#ea9033" />
      <Float speed={1.2} rotationIntensity={0.08} floatIntensity={0.25}>
        <ArchitecturalMass mouse={mouse} simplified={isMobile} />
      </Float>
      <ContactShadows
        position={[0, -1.05, 0]}
        opacity={0.25}
        scale={10}
        blur={2.5}
        far={4}
      />
      {!isMobile && <Environment preset="apartment" environmentIntensity={0.45} />}
      <fog attach="fog" args={["#f6f4f1", 10, 22]} />
    </>
  );
}

export function HeroScene({ className }: { className?: string }) {
  return (
    <CanvasWrapper
      className={className}
      camera={{ position: [3.2, 1.8, 5.2], fov: 38 }}
    >
      <Scene />
    </CanvasWrapper>
  );
}
