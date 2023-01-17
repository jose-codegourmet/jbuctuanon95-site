// @ts-nocheck
import ApolloGLTF from './ApolloGLTF';
import PeppeGLTF from './PeppeGLTF';
import StarsMesh from './StarsMesh';
import { CameraShake, Environment, Stats } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { useInView } from 'framer-motion';
import React, { Suspense, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from 'src/redux/reducers';

// import * as THREE from 'three';

const Rig = () => {
  // const [vec] = useState(() => new THREE.Vector3());
  // const { camera, mouse } = useThree();
  // useFrame(() => camera.position.lerp(vec.set(mouse.x * 5, 0, 5), 0.05));
  return (
    <CameraShake
      maxYaw={0.01}
      maxPitch={0.01}
      maxRoll={0.01}
      yawFrequency={0.1}
      pitchFrequency={0.5}
      rollFrequency={0.4}
    />
  );
};

const StopAnimation = () => useFrame(() => null, 1000);

const HomeSceneCanvas = (props) => {
  const { passedRef, isDarkMode, currPage, isStopAnimating, gltfAnimationState } = props;
  const inView = useInView(passedRef, {
    once: true,
  });

  return (
    <Canvas shadows={true}>
      <Suspense fallback={null}>
        {isStopAnimating && <StopAnimation />}
        {process.env.NODE_ENV === 'development' && <Stats />}
        <ambientLight intensity={0.5} color={isDarkMode ? 'blue' : 'pink'} />
        {inView && <ApolloGLTF animationState={gltfAnimationState} />}
        {inView && <PeppeGLTF animationState={gltfAnimationState} />}
        <spotLight position={[50, 50, -30]} castShadow />
        <pointLight position={[-10, -10, -10]} color={isDarkMode ? 'yellow' : 'white'} intensity={3} />
        <pointLight position={[0, -5, 5]} color={isDarkMode ? 'orange' : 'white'} intensity={0.5} />
        <directionalLight position={[0, -5, 0]} color={isDarkMode ? 'red' : 'white'} intensity={2} />

        <StarsMesh isDarkMode={isDarkMode} isStopAnimating={isStopAnimating} />
        <rectAreaLight
          width={15}
          height={100}
          position={[30, 30, -10]}
          intensity={10}
          onUpdate={(self) => self.lookAt(0, 0, 0)}
        />
        <Environment preset="warehouse" />
        <Rig isStopAnimating={isStopAnimating} />
      </Suspense>
    </Canvas>
  );
};

const HomeScene = (props) => {
  const ref = useRef(null);

  return (
    <div className="apollo-model w-full h-full" ref={ref}>
      <HomeSceneCanvas passedRef={ref} {...props} />
    </div>
  );
};

export default HomeScene;
