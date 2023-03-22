import HeroScene from '../threedee/HeroScene';
import { motion } from 'framer-motion';
import React from 'react';
import type { FC } from 'react';
import { DEFAULT_ANIMATION_STATE } from 'src/constants/project';
import type { ProjectStateTypes } from 'src/types/project';

export interface NavProps extends ProjectStateTypes {
  isStopAnimating: boolean;
}

const IndexScene: FC<NavProps> = (props) => {
  const { isDarkMode, gltfAnimationState } = props;
  const { loaded, animation, prevAnimation, animationPage, stopAnimation } = gltfAnimationState;

  const containerAnims = {
    visible: {
      left: '50%',
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
    hidden: {
      x: -50,
      opacity: 0,
      transition: {
        ease: 'easeOut',
        duration: 1,
      },
    },
    'move-to-left': {
      left: '0',
      opacity: 1,
      transition: {
        ease: 'easeOut',
        duration: 0.5,
      },
    },
    'move-to-right': {
      left: '50%',
      opacity: 1,
      transition: {
        ease: 'easeOut',
        duration: 0.5,
      },
    },
  };

  if (animationPage !== 'index') return null;

  return (
    <motion.div
      className="threeFiberObject--index-scene"
      variants={containerAnims}
      animate={(loaded && animation) || DEFAULT_ANIMATION_STATE}
      initial={(loaded && prevAnimation) || DEFAULT_ANIMATION_STATE}
    >
      <HeroScene gltfAnimationState={gltfAnimationState} isDarkMode={isDarkMode} isStopAnimating={stopAnimation} />
    </motion.div>
  );
};

export default IndexScene;
