// @ts-nocheck
import { Environment, useGLTF } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import React, { Suspense, useRef } from 'react';

const Model = () => {
  const mymesh: any = useRef();
  const { scene } = useGLTF('./3d/apollohead/scene.gltf');

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    if (mymesh.current) {
      mymesh.current.rotation.y = a;
      mymesh.current.rotation.z = 0.15;
      mymesh.current.position.x = 2;
      mymesh.current.position.y = -1.75;
      mymesh.current.position.z = 2;
    }
  });

  return (
    <group>
      <primitive ref={mymesh} object={scene} scale={2} />
    </group>
  );
};

const ApolloModel = () => {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <ambientLight intensity={1} />
        <pointLight position={[5, 10, 5]} intensity={1} />
        <pointLight position={[-5, -2, 5]} intensity={1} />
        <Model />
        <Environment preset="city" />
      </Suspense>
    </Canvas>
  );
};

export default ApolloModel;
