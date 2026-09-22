"use client";

import { ContactShadows, Environment } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { storyChapters } from "@/content/studio";
import { useIsMobile } from "@/hooks/useMediaQuery";
import { gsap, registerGsap, ScrollTrigger } from "@/lib/gsap";

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

type Piece = {
  start: number;
  span: number;
};

/**
 * Stylized isometric cottage — matte, bright, toy-like (ref format).
 * Soft rise on scroll; shared materials stay stable.
 */
function RisingHouse({ progress }: { progress: React.MutableRefObject<number> }) {
  const root = useRef<THREE.Group>(null);
  const pieces = useRef<(THREE.Group | null)[]>([]);
  const smooth = useRef(0);

  const timings: Piece[] = useMemo(
    () => [
      { start: 0.0, span: 0.12 }, // grass
      { start: 0.08, span: 0.12 }, // foundation
      { start: 0.18, span: 0.16 }, // walls
      { start: 0.32, span: 0.14 }, // porch + door
      { start: 0.44, span: 0.14 }, // windows + awnings
      { start: 0.56, span: 0.16 }, // roof
      { start: 0.7, span: 0.14 }, // dormer + chimney
    ],
    []
  );

  const mats = useMemo(() => {
    const mk = (color: string, roughness = 0.85, metalness = 0) =>
      new THREE.MeshStandardMaterial({ color, roughness, metalness });
    return {
      grass: mk("#7cb342", 0.95),
      foundation: mk("#6b6e73", 0.9),
      wall: mk("#f7f7f5", 0.82),
      roof: mk("#e8912a", 0.78),
      roofDark: mk("#d47a18", 0.8),
      door: mk("#8b3a2a", 0.75),
      awning: mk("#e8912a", 0.78),
      frame: mk("#ffffff", 0.7),
      glass: mk("#c5d8e8", 0.35, 0.15),
      step: mk("#8a8d92", 0.88),
      chimneyCap: mk("#5c5f64", 0.85),
    };
  }, []);

  const roofGeo = useMemo(() => {
    const w = 2.6;
    const h = 0.95;
    const d = 2.15;
    const shape = new THREE.Shape();
    shape.moveTo(-w / 2, 0);
    shape.lineTo(w / 2, 0);
    shape.lineTo(0, h);
    shape.closePath();
    const geo = new THREE.ExtrudeGeometry(shape, {
      depth: d,
      bevelEnabled: false,
    });
    geo.translate(0, 0, -d / 2);
    return geo;
  }, []);

  const dormerRoofGeo = useMemo(() => {
    const w = 0.85;
    const h = 0.38;
    const d = 0.55;
    const shape = new THREE.Shape();
    shape.moveTo(-w / 2, 0);
    shape.lineTo(w / 2, 0);
    shape.lineTo(0, h);
    shape.closePath();
    const geo = new THREE.ExtrudeGeometry(shape, {
      depth: d,
      bevelEnabled: false,
    });
    geo.translate(0, 0, -d / 2);
    return geo;
  }, []);

  useFrame((_, delta) => {
    if (!root.current) return;

    smooth.current = THREE.MathUtils.damp(smooth.current, progress.current, 4, delta);
    const p = smooth.current;

    root.current.rotation.y = THREE.MathUtils.damp(
      root.current.rotation.y,
      -0.72 + p * 0.08,
      2.5,
      delta
    );

    pieces.current.forEach((group, i) => {
      if (!group) return;
      const t = timings[i];
      if (!t) return;
      const local = easeOutCubic(
        THREE.MathUtils.clamp((p - t.start) / t.span, 0, 1)
      );
      group.visible = local > 0.04;
      group.position.y = THREE.MathUtils.lerp(-0.22, 0, local);
      group.scale.setScalar(THREE.MathUtils.lerp(0.96, 1, local));
    });
  });

  const setPiece = (i: number) => (el: THREE.Group | null) => {
    pieces.current[i] = el;
  };

  return (
    <group ref={root} position={[0.1, 0.05, 0]} scale={1.15}>
      {/* 0 — grass pad */}
      <group ref={setPiece(0)}>
        <mesh position={[0, 0.02, 0]} receiveShadow castShadow>
          <boxGeometry args={[3.4, 0.06, 2.8]} />
          <primitive object={mats.grass} attach="material" />
        </mesh>
      </group>

      {/* 1 — foundation */}
      <group ref={setPiece(1)}>
        <mesh position={[0, 0.18, 0]} castShadow receiveShadow>
          <boxGeometry args={[2.35, 0.28, 1.95]} />
          <primitive object={mats.foundation} attach="material" />
        </mesh>
      </group>

      {/* 2 — white walls */}
      <group ref={setPiece(2)}>
        <mesh position={[0, 1.05, 0]} castShadow receiveShadow>
          <boxGeometry args={[2.25, 1.45, 1.85]} />
          <primitive object={mats.wall} attach="material" />
        </mesh>
        {/* Upper gable fill under roof */}
        <mesh position={[0, 1.95, 0]} castShadow>
          <boxGeometry args={[2.15, 0.35, 1.75]} />
          <primitive object={mats.wall} attach="material" />
        </mesh>
      </group>

      {/* 3 — porch, door, steps */}
      <group ref={setPiece(3)}>
        <mesh position={[0, 0.55, 1.05]} castShadow receiveShadow>
          <boxGeometry args={[1.05, 0.08, 0.55]} />
          <primitive object={mats.wall} attach="material" />
        </mesh>
        <mesh position={[-0.32, 0.95, 1.2]} castShadow>
          <boxGeometry args={[0.1, 0.75, 0.1]} />
          <primitive object={mats.wall} attach="material" />
        </mesh>
        <mesh position={[0.32, 0.95, 1.2]} castShadow>
          <boxGeometry args={[0.1, 0.75, 0.1]} />
          <primitive object={mats.wall} attach="material" />
        </mesh>
        <mesh position={[0, 1.35, 1.05]} castShadow>
          <boxGeometry args={[1.05, 0.08, 0.55]} />
          <primitive object={mats.wall} attach="material" />
        </mesh>
        <mesh position={[0, 0.85, 0.94]} castShadow>
          <boxGeometry args={[0.42, 0.85, 0.06]} />
          <primitive object={mats.door} attach="material" />
        </mesh>
        <mesh position={[0.12, 0.85, 0.98]} castShadow>
          <sphereGeometry args={[0.03, 8, 8]} />
          <primitive object={mats.roofDark} attach="material" />
        </mesh>
        <mesh position={[0, 0.38, 1.22]} castShadow>
          <boxGeometry args={[0.55, 0.1, 0.22]} />
          <primitive object={mats.step} attach="material" />
        </mesh>
        <mesh position={[0, 0.28, 1.38]} castShadow>
          <boxGeometry args={[0.62, 0.1, 0.22]} />
          <primitive object={mats.step} attach="material" />
        </mesh>
      </group>

      {/* 4 — windows + orange awnings */}
      <group ref={setPiece(4)}>
        {[
          [-0.72, 0.95, 0.94],
          [0.72, 0.95, 0.94],
        ].map(([x, y, z], i) => (
          <group key={i} position={[x, y, z]}>
            <mesh castShadow>
              <boxGeometry args={[0.48, 0.55, 0.05]} />
              <primitive object={mats.frame} attach="material" />
            </mesh>
            <mesh position={[0, 0, 0.02]}>
              <boxGeometry args={[0.4, 0.46, 0.03]} />
              <primitive object={mats.glass} attach="material" />
            </mesh>
            <mesh position={[0, 0, 0.03]}>
              <boxGeometry args={[0.02, 0.46, 0.02]} />
              <primitive object={mats.frame} attach="material" />
            </mesh>
            <mesh position={[0, 0, 0.03]}>
              <boxGeometry args={[0.4, 0.02, 0.02]} />
              <primitive object={mats.frame} attach="material" />
            </mesh>
            <mesh position={[0, 0.38, 0.12]} rotation={[0.35, 0, 0]} castShadow>
              <boxGeometry args={[0.55, 0.06, 0.28]} />
              <primitive object={mats.awning} attach="material" />
            </mesh>
          </group>
        ))}
        {/* Side window */}
        <group position={[1.14, 1.55, 0.15]} rotation={[0, Math.PI / 2, 0]}>
          <mesh castShadow>
            <boxGeometry args={[0.38, 0.42, 0.05]} />
            <primitive object={mats.frame} attach="material" />
          </mesh>
          <mesh position={[0, 0, 0.02]}>
            <boxGeometry args={[0.3, 0.34, 0.03]} />
            <primitive object={mats.glass} attach="material" />
          </mesh>
        </group>
      </group>

      {/* 5 — orange gable roof */}
      <group ref={setPiece(5)}>
        <mesh
          geometry={roofGeo}
          position={[0, 2.12, 0]}
          castShadow
          receiveShadow
        >
          <primitive object={mats.roof} attach="material" />
        </mesh>
        {/* Ridge + shingle lines */}
        <mesh position={[0, 3.05, 0]} castShadow>
          <boxGeometry args={[0.12, 0.08, 2.2]} />
          <primitive object={mats.roofDark} attach="material" />
        </mesh>
        {[-0.55, -0.25, 0.25, 0.55].map((x) => (
          <mesh key={x} position={[x, 2.55, 0]} castShadow>
            <boxGeometry args={[0.04, 0.7, 2.12]} />
            <primitive object={mats.roofDark} attach="material" />
          </mesh>
        ))}
      </group>

      {/* 6 — dormer + chimney */}
      <group ref={setPiece(6)}>
        <mesh position={[0, 2.55, 0.72]} castShadow>
          <boxGeometry args={[0.7, 0.55, 0.5]} />
          <primitive object={mats.wall} attach="material" />
        </mesh>
        <mesh
          geometry={dormerRoofGeo}
          position={[0, 2.82, 0.72]}
          castShadow
        >
          <primitive object={mats.roof} attach="material" />
        </mesh>
        <mesh position={[0, 2.55, 0.98]} castShadow>
          <boxGeometry args={[0.35, 0.35, 0.05]} />
          <primitive object={mats.frame} attach="material" />
        </mesh>
        <mesh position={[0, 2.55, 1.0]}>
          <boxGeometry args={[0.28, 0.28, 0.03]} />
          <primitive object={mats.glass} attach="material" />
        </mesh>
        <mesh position={[0.85, 2.85, -0.15]} castShadow>
          <boxGeometry args={[0.32, 0.7, 0.32]} />
          <primitive object={mats.wall} attach="material" />
        </mesh>
        <mesh position={[0.85, 3.25, -0.15]} castShadow>
          <boxGeometry args={[0.4, 0.1, 0.4]} />
          <primitive object={mats.chimneyCap} attach="material" />
        </mesh>
      </group>

      <ContactShadows
        position={[0, 0.01, 0]}
        opacity={0.28}
        scale={10}
        blur={2.8}
        far={4}
        frames={1}
        color="#6a6a70"
      />
    </group>
  );
}

function CameraRig({ progress }: { progress: React.MutableRefObject<number> }) {
  const { camera } = useThree();
  const smooth = useRef(0);

  useFrame((_, delta) => {
    smooth.current = THREE.MathUtils.damp(smooth.current, progress.current, 3.5, delta);
    const p = smooth.current;
    // Isometric-style three-quarter view
    const radius = THREE.MathUtils.lerp(6.8, 5.6, p);
    const y = THREE.MathUtils.lerp(4.2, 4.8, p);
    const angle = -0.85;
    camera.position.x = Math.sin(angle) * radius + 0.4;
    camera.position.z = Math.cos(angle) * radius + 0.6;
    camera.position.y = y;
    camera.lookAt(0, 1.4, 0);
  });

  return null;
}

function StoryCanvas({ progress }: { progress: React.MutableRefObject<number> }) {
  const isMobile = useIsMobile();
  return (
    <Canvas
      dpr={isMobile ? [1, 1.25] : [1, 1.6]}
      camera={{ position: [4.8, 4.4, 5.4], fov: 32 }}
      shadows={!isMobile}
      gl={{
        antialias: true,
        powerPreference: "high-performance",
        toneMapping: THREE.ACESFilmicToneMapping,
        toneMappingExposure: 1.2,
        alpha: false,
      }}
    >
      <color attach="background" args={["#e8e8ea"]} />
      <ambientLight intensity={0.85} />
      <directionalLight
        position={[6, 10, 5]}
        intensity={1.35}
        castShadow={!isMobile}
        shadow-mapSize={[1024, 1024]}
        shadow-bias={-0.0002}
        color="#ffffff"
      />
      <directionalLight position={[-4, 5, -2]} intensity={0.45} color="#d8e0f0" />
      <hemisphereLight args={["#ffffff", "#c8c8cc", 0.55]} />
      <RisingHouse progress={progress} />
      <CameraRig progress={progress} />
      {!isMobile && <Environment preset="apartment" environmentIntensity={0.25} />}
      <fog attach="fog" args={["#e8e8ea", 12, 26]} />
    </Canvas>
  );
}

export function ScrollStorySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const progress = useRef(0);
  const chapterRefs = useRef<(HTMLDivElement | null)[]>([]);
  const barRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    registerGsap();
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        onUpdate: (self) => {
          progress.current = self.progress;
          const chapterIndex = Math.min(
            storyChapters.length - 1,
            Math.floor(self.progress * storyChapters.length)
          );
          chapterRefs.current.forEach((el, i) => {
            if (!el) return;
            const active = i === chapterIndex;
            el.style.opacity = active ? "1" : "0";
            el.style.transform = active ? "translateY(0)" : "translateY(14px)";
          });
          barRefs.current.forEach((el, i) => {
            if (!el) return;
            el.style.transform = `scaleX(${i <= chapterIndex ? 1 : 0.15})`;
            el.style.opacity = i <= chapterIndex ? "1" : "0.25";
          });
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative h-[280vh] bg-[#e8e8ea] md:h-[400vh]">
      <div className="sticky top-0 flex h-[100svh] items-center overflow-hidden">
        <div className="absolute inset-0">
          <StoryCanvas progress={progress} />
        </div>

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#e8e8ea] via-[#e8e8ea]/88 to-transparent md:via-[#e8e8ea]/55" />

        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-4 sm:px-5 md:px-10 lg:px-14">
          <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-ink/50 sm:mb-6">
            Studio Journey
          </p>
          <div className="relative h-[240px] max-w-lg sm:h-[220px] md:h-[280px]">
            {storyChapters.map((chapter, i) => (
              <div
                key={chapter.id}
                ref={(el) => {
                  chapterRefs.current[i] = el;
                }}
                className="absolute inset-0 transition-all duration-500 ease-out"
                style={{ opacity: i === 0 ? 1 : 0 }}
              >
                <p className="mb-2 text-[10px] uppercase tracking-[0.24em] text-orange sm:mb-3 sm:text-xs sm:tracking-[0.28em]">
                  0{i + 1} — {chapter.phase}
                </p>
                <h3 className="font-display text-2xl text-heading sm:text-3xl md:text-4xl">
                  {chapter.title}
                </h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-ink/60 sm:mt-4 md:text-[15px]">
                  {chapter.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex gap-2">
            {storyChapters.map((c, i) => (
              <div key={c.id} className="h-px w-10 overflow-hidden bg-ink/15">
                <div
                  ref={(el) => {
                    barRefs.current[i] = el;
                  }}
                  className="h-px origin-left bg-orange transition-all duration-500"
                  style={{
                    transform: i === 0 ? "scaleX(1)" : "scaleX(0.15)",
                    opacity: i === 0 ? 1 : 0.25,
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
