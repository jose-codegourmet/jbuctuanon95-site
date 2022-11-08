// @ts-nocheck
import CameraController from './CameraController';
import { animated, useSpring } from '@react-spring/three';
import { Environment, useGLTF } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import React, { Suspense, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

export const PeppeBareModel = (props) => {
  const mymesh: any = useRef();
  const { scene } = useGLTF('./3d/pepe/scene.gltf');
  const [active, setActive] = useState(false);

  const { scale } = useSpring({ scale: active ? 1.5 : 1 });

  return (
    <animated.mesh scale={scale} onClick={() => setActive(!active)}>
      <primitive ref={mymesh} object={scene} scale={2} {...props} />
    </animated.mesh>
  );
};

const PeppeModel = () => {
  const { ref, inView } = useInView();
  return (
    <div className="peppe-model w-full h-full" ref={ref}>
      <Canvas>
        <Suspense fallback={null}>
          <ambientLight intensity={1} />
          <pointLight position={[5, 10, 5]} intensity={1} />
          <pointLight position={[-5, -2, 5]} intensity={1} />
          {inView && <PeppeBareModel />}
          <Environment preset="city" />
          <CameraController />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default PeppeModel;
