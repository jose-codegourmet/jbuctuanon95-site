// @ts-nocheck
import { MeshDistortMaterial, MeshWobbleMaterial } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React, { useRef } from 'react';
import * as THREE from 'three';

const WobbleSphere = () => {
  const mesh = useRef();

  if (mesh.current) {
    useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));
  }

  return (
    <mesh>
      <sphereBufferGeometry args={[1.15, 64, 64]} />
      <MeshDistortMaterial attach="material" factor={10} speed={2} color={'#4d1c84'} metalness={0.5} />
    </mesh>
  );
};

export default WobbleSphere;
