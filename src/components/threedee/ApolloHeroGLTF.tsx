// @ts-nocheck
import { useGLTF } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { motion } from 'framer-motion-3d';
import React, { Suspense, useRef } from 'react';
import { DEFAULT_ANIMATION_STATE } from 'src/constants/project';
import { defaultTransition, rotateTo } from 'src/utils/animationUtils';
import * as THREE from 'three';
import { degToRad } from 'three/src/math/MathUtils';

const ApolloHeroGLTF = ({ gltfAnimationState, zIndex = 1 }) => {
  const apolloMesh: any = useRef();
  const gltfObj = useGLTF('/3d/apollohead/scene.gltf');
  const { scene: ApolloScene } = gltfObj;
  const { loaded, animation, prevAnimation, animationPage, stopAnimation } = gltfAnimationState;

  const { width } = useThree((state) => state.viewport);

  const apolloPosX = 0;
  const apolloPosZ = zIndex;
  const apolloPosY = -0.3;
  const apolloRotateY = 1;
  const apolloRotateX = 0;
  const apolloRotateZ = 0;

  const variants = {
    hidden: {
      x: apolloPosX + 3,
    },
    visible: {
      x: apolloPosX,
      transition: defaultTransition({
        delay: 0.15,
      }),
    },
    'move-to-left': { x: apolloPosX, ...rotateTo('left', 1, apolloRotateY, { delay: 0 }) },
    'move-to-right': { x: apolloPosX, ...rotateTo('right', 1, apolloRotateY, { delay: 0 }) },
  };

  return (
    <Suspense>
      <motion.primitive
        ref={apolloMesh}
        object={ApolloScene}
        scale={[1, 1, 1]}
        rotation={[apolloRotateX, apolloRotateY, apolloRotateZ]}
        position={[apolloPosX, apolloPosY, apolloPosZ]}
        animate={(loaded && animation) || DEFAULT_ANIMATION_STATE}
        initial={(loaded && prevAnimation) || DEFAULT_ANIMATION_STATE}
        variants={variants}
        {...(variants[animation]?.transition && {
          transition: variants[animation].transition,
        })}
      />
    </Suspense>
  );
};

export default ApolloHeroGLTF;
