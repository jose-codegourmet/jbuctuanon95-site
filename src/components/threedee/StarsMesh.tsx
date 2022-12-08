// @ts-nocheck
import { PointMaterial, Points } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { random } from 'maath';
import React, { useRef, useState } from 'react';
import * as THREE from 'three';

const StarsMesh = (props) => {
  const { isDarkMode } = props;
  const ref = useRef();
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.5 }));
  useFrame((state, delta) => {
    ref.current.rotation.y -= delta / 10;
  });
  return (
    <group rotation={[0, 0, 0]} scale={4}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color={isDarkMode ? 'pink' : '#a9abf3'}
          size={isDarkMode ? 0.01 : 0.03}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

export default StarsMesh;
