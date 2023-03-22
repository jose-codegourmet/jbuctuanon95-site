// @ts-nocheck
import ApolloHeroGLTF from './ApolloHeroGLTF';
import CameraFloat from './CameraFloat';
import PeppeGLTF from './PeppeGLTF';
import WobbleSphere from './WobbleSphere';
import { OrbitControls, Stats } from '@react-three/drei';
import { Canvas, useEffect, useFrame } from '@react-three/fiber';
import { useInView } from 'framer-motion';
import React, { Suspense, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { isModelsLoadedState } from 'src/redux/reducers/gltfAnimations';

const HeroScene = (props) => {
  const cameraX = 0;
  const cameraY = 1;
  const cameraZ = 5.5;

  return (
    <div className="w-full h-full">
      <Canvas shadows={true} camera={{ fov: 45, position: [cameraX, cameraY, cameraZ] }}>
        <Suspense fallback={null}>
          <HeroModels {...props} />
        </Suspense>
      </Canvas>
    </div>
  );
};

function HeroModels({ isDarkMode, isStopAnimating, gltfAnimationState }) {
  const { loaded, animation, prevAnimation, animationPage, stopAnimation } = gltfAnimationState;
  const dispatch = useDispatch();

  if (!gltfAnimationState.loaded) {
    dispatch(isModelsLoadedState(true));
  }

  return (
    <>
      {isStopAnimating && <StopAnimation />}
      {process.env.NODE_ENV === 'development' && <Stats />}

      <ambientLight intensity={0.5} color={isDarkMode ? 'blue' : 'pink'} />
      <ApolloHeroGLTF gltfAnimationState={gltfAnimationState} zIndex={1.2} />
      <PeppeGLTF gltfAnimationState={gltfAnimationState} zIndex={1.7} />
      <WobbleSphere />
      <spotLight position={[50, 50, -30]} castShadow />
      <pointLight position={[-10, -10, -10]} color={isDarkMode ? 'yellow' : 'white'} intensity={3} />
      <pointLight position={[0, -5, 5]} color={isDarkMode ? 'orange' : 'white'} intensity={0.5} />
      <directionalLight position={[0, -5, 0]} color={isDarkMode ? 'red' : 'white'} intensity={2} />
      <rectAreaLight
        width={15}
        height={100}
        position={[30, 30, -10]}
        intensity={10}
        onUpdate={(self) => self.lookAt(0, 0, 0)}
      />
      <CameraFloat isStopAnimating={isStopAnimating} />
    </>
  );
}

function StopAnimation() {
  return useFrame(() => null, 1000);
}

export default HeroScene;
