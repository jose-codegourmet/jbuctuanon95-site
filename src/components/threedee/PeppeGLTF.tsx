// @ts-nocheck
import { useGLTF } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { motion } from 'framer-motion-3d';
import React, { useRef } from 'react';
import { DEFAULT_ANIMATION_STATE } from 'src/constants/project';
import { defaultTransition, rotateTo } from 'src/utils/animationUtils';
import * as THREE from 'three';
import { degToRad } from 'three/src/math/MathUtils';

const PeppeGLTF = ({ gltfAnimationState, zIndex = 1.4 }) => {
  const peppeMesh: any = useRef();
  const { scene: PeppeScene } = useGLTF('/3d/pepe/scene.gltf');
  const { width } = useThree((state) => state.viewport);
  const isDesktop = width >= 6;
  const { loaded, animation, prevAnimation, animationPage, stopAnimation } = gltfAnimationState;

  const peppePosX = 0;
  const peppePosY = -0.6;
  const peppePosZ = zIndex;
  const peppeRotateY = 0;
  const peppeRotateX = -0.5;
  const peppeRotateZ = 0;

  const variants = {
    hidden: {
      x: peppePosX + 3,
    },
    visible: {
      x: peppePosX,
      rotateY: degToRad(0),
      transition: defaultTransition({
        delay: 0.15,
      }),
    },
    'move-to-left': { x: peppePosX, ...rotateTo('left', 1, peppeRotateY) },
    'move-to-right': { x: peppePosX, ...rotateTo('right', 1, peppeRotateY) },
  };

  return (
    <motion.primitive
      ref={peppeMesh}
      object={PeppeScene}
      animate={(loaded && animation) || DEFAULT_ANIMATION_STATE}
      initial={(loaded && prevAnimation) || DEFAULT_ANIMATION_STATE}
      scale={[0.5, 0.5, 0.5]}
      variants={variants}
      rotation={[peppeRotateX, peppeRotateY, peppeRotateZ]}
      position={[peppePosX, peppePosY, peppePosZ]}
      {...(variants[animation]?.transition && {
        transition: variants[animation].transition,
      })}
    />
  );
};

export default PeppeGLTF;
