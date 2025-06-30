import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import * as THREE from 'three';

type StarsProps = {
  count?: number;
  size?: number;
  color?: string;
};


function Stars(props: StarsProps) {
  const ref = useRef<THREE.Points>(null);
  
  const [sphere] = useMemo(() => {
    // Generate valid sphere positions with proper validation
    const positions = new Float32Array(5000 * 2); // Ensure proper length
    const tempSphere = random.inSphere(new Float32Array(5000 * 2), { radius: 3 });
    
    // Validate and clean positions to prevent NaN values
    for (let i = 0; i < tempSphere.length; i++) {
      positions[i] = isNaN(tempSphere[i]) ? 0 : tempSphere[i];
    }
    
    return [positions];
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#00f5ff"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

function FloatingGeometry() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.5;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.5;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef} position={[2, 0, 0]}>
      <icosahedronGeometry args={[1, 1]} />
      <meshStandardMaterial
        color="#8b5cf6"
        transparent
        opacity={0.8}
        wireframe
      />
    </mesh>
  );
}

function FloatingTorus() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = Math.cos(state.clock.elapsedTime * 0.8) * 0.7;
      meshRef.current.rotation.x += 0.005;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef} position={[-2, 1, -1]}>
      <torusGeometry args={[1, 0.4, 16, 100]} />
      <meshStandardMaterial
        color="#ff0080"
        transparent
        opacity={0.7}
        wireframe
      />
    </mesh>
  );
}

export default function ThreeBackground() {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas 
        camera={{ position: [0, 0, 1] }}
        performance={{ min: 0.5 }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Stars />
        {/* <FloatingGeometry />
        <FloatingTorus /> */}
      </Canvas>
    </div>
  );
}