// @ts-nocheck
import { useGLTF } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { motion } from 'framer-motion-3d';
import React, { useRef } from 'react';
import * as THREE from 'three';

const ApolloGLTF = ({ animationState = 'visible' }) => {
  const apolloMesh: any = useRef();
  const { scene: ApolloScene } = useGLTF('./3d/apollohead/scene.gltf');
  const { width } = useThree((state) => state.viewport);

  const isDesktop = width >= 6;
  const apolloPosX = isDesktop ? 1.8 : 0.8;
  const apolloPosZ = isDesktop ? 3.2 : 2.5;
  const apolloPosY = isDesktop ? -0.5 : 0;

  const variants = {
    hidden: {
      x: apolloPosX + 3,
      rotateY: 10,
    },
    visible: {
      x: apolloPosX,
      rotateY: 0,
    },
    out: {
      x: 4,
      transition: {
        duration: 2,
      },
    },
    hover: {
      rotateZ: 0.3,
      transition: {
        rotateZ: { duration: 1.5, ease: 'linear', repeat: Infinity },
      },
    },
  };

  return (
    <motion.primitive
      ref={apolloMesh}
      object={ApolloScene}
      scale={[1, 1, 1]}
      position={[apolloPosX, apolloPosY, apolloPosZ]}
      initial={animationState === 'visible' ? 'hidden' : 'visible'}
      animate={animationState}
      exit="out"
      variants={variants}
      transition={{
        x: {
          duration: 2,
        },
        rotateY: {
          duration: 3,
        },
      }}
    />
  );
};

export default ApolloGLTF;
