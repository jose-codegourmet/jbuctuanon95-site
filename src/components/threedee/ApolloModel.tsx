// @ts-nocheck
import { Environment, useGLTF } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import React, { Suspense, useLayoutEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

const Model = () => {
  const mymesh: any = useRef();
  const { scene } = useGLTF('./3d/apollohead/scene.gltf');

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    if (mymesh.current) {
      mymesh.current.rotation.y = a / 10;
      mymesh.current.rotation.z = 0.25;
      mymesh.current.position.y = -0.5;
      mymesh.current.position.x = 0.2;
      mymesh.current.position.z = 2.5;
    }
  });

  return (
    <group>
      <primitive ref={mymesh} object={scene} scale={1.2} />
    </group>
  );
};

const ApolloModel = () => {
  const { ref, inView } = useInView();
  return (
    <div className="apollo-model w-full h-full" ref={ref}>
      <Canvas>
        <Suspense fallback={null}>
          <ambientLight intensity={1} />
          <pointLight position={[5, 10, 5]} intensity={1} />
          <pointLight position={[-5, -2, 5]} intensity={1} />
          {inView && <Model />}
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ApolloModel;
