import cn from 'classnames';
import { motion } from 'framer-motion';
import React from 'react';
import type { FC, ReactNode } from 'react';
import { WEBSITE_NAV } from 'src/constants/project';

const NavFullPageContainer: FC<{ children: ReactNode; show: boolean }> = ({ children, show }) => {
  const containerVariants = {
    show: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
    hide: {
      opacity: 0,
      transition: {
        ease: 'easeOut',
        duration: 0.5,
        delay: WEBSITE_NAV.length * 0.15 + 0.75 / 2,
      },
    },
  };

  return (
    <motion.div
      className={cn('nav-full-page', {
        'pointer-events-auto': show,
        'pointer-events-none': !show,
      })}
      variants={containerVariants}
      animate={show ? 'show' : 'hide'}
      initial={show ? 'hide' : 'show'}
    >
      {children}
    </motion.div>
  );
};

export default NavFullPageContainer;
