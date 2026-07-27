"use client";

import { Float, Sparkles } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState, type MutableRefObject } from "react";
import type { Group } from "three";

function IncenseLight({ pointer }: { pointer: MutableRefObject<{ x: number; y: number }> }) {
  const group = useRef<Group>(null);

  useFrame((_, delta) => {
    if (!group.current) return;
    const targetX = 1.2 + pointer.current.x * 0.28;
    const targetY = -0.1 - pointer.current.y * 0.2;
    group.current.position.x += (targetX - group.current.position.x) * Math.min(delta * 2.2, 1);
    group.current.position.y += (targetY - group.current.position.y) * Math.min(delta * 2.2, 1);
    group.current.rotation.y += delta * 0.18;
    group.current.rotation.x += (pointer.current.y * 0.13 - group.current.rotation.x) * Math.min(delta * 1.7, 1);
  });

  return (
    <Float speed={1.4} rotationIntensity={0.18} floatIntensity={0.45}>
      <group ref={group} position={[1.2, -0.1, 0]}>
        <pointLight color="#ff9b62" intensity={16} distance={4.5} />
        <mesh>
          <sphereGeometry args={[0.32, 32, 32]} />
          <meshBasicMaterial color="#ff7a45" transparent opacity={0.82} />
        </mesh>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.68, 0.022, 16, 72]} />
          <meshBasicMaterial color="#ffd2a2" transparent opacity={0.75} />
        </mesh>
        <mesh rotation={[Math.PI / 2, 0.65, 0]}>
          <torusGeometry args={[1.08, 0.012, 16, 72]} />
          <meshBasicMaterial color="#ffb06b" transparent opacity={0.42} />
        </mesh>
      </group>
    </Float>
  );
}

export function TempleAura() {
  const [reduceMotion, setReduceMotion] = useState(true);
  const pointer = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const updatePointer = (event: MouseEvent) => {
      pointer.current = {
        x: (event.clientX / window.innerWidth - 0.5) * 2,
        y: (event.clientY / window.innerHeight - 0.5) * 2,
      };
    };
    window.addEventListener("mousemove", updatePointer, { passive: true });
    return () => window.removeEventListener("mousemove", updatePointer);
  }, []);

  if (reduceMotion) return null;

  return (
    <div className="hero-scene" aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 5.4], fov: 42 }} dpr={[1, 1.5]}>
        <ambientLight intensity={1.5} />
        <IncenseLight pointer={pointer} />
        <Sparkles count={42} scale={[6.2, 4.2, 2]} size={2.4} speed={0.34} color="#ffd8a8" position={[1.25, 0, 0]} />
      </Canvas>
    </div>
  );
}
