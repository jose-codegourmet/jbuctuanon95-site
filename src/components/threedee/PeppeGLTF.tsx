// @ts-nocheck
import { useGLTF } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { motion } from 'framer-motion-3d';
import React, { useRef } from 'react';
import * as THREE from 'three';

const PeppeGLTF = ({ animationState = 'visible' }) => {
  const peppeMesh: any = useRef();
  const { scene: PeppeScene } = useGLTF('/3d/pepe/scene.gltf');
  const { width } = useThree((state) => state.viewport);
  const isDesktop = width >= 6;
  const peppePosX = isDesktop ? -3 : -1.5;
  const peppePosY = isDesktop ? 0.7 : -1;
  const peppePosZ = isDesktop ? 1.5 : -1;

  const variants = {
    hidden: {
      x: peppePosX - 3,
      rotateY: 10,
    },
    'hide-peppe': {
      x: peppePosX - 3,
      rotateY: 10,
    },
    visible: {
      rotateY: 1,
      x: peppePosX,
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
      ref={peppeMesh}
      object={PeppeScene}
      initial={animationState === 'visible' ? 'hidden' : 'visible'}
      animate={animationState}
      scale={[1, 1, 1]}
      variants={variants}
      position={[peppePosX, peppePosY, peppePosZ]}
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

export default PeppeGLTF;
