import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import React from 'react';
import type { FC } from 'react';
import { WEBSITE_SOCIALS } from 'src/constants/project';
import type { ProjectLink } from 'src/types/project';

const NavFullSocials: FC<{ show: boolean }> = ({ show }) => {
  const router = useRouter();

  const ulVariants = {
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.5,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        staggerChildren: 0.15,
        delay: WEBSITE_SOCIALS.length * 0.75,
      },
    },
  };

  const liVariants = {
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.75,
        type: 'spring',
      },
    },
    hidden: {
      opacity: 0,
      y: -50,
      transition: {
        duration: 0.75,
        type: 'spring',
      },
    },
  };

  const bgVariants = {
    show: {
      opacity: 1,
      scaleY: 1,
      transition: {
        duration: 1,
        type: 'spring',
      },
    },
    hidden: {
      opacity: 1,
      scaleY: 0,
      transition: {
        duration: 1,
        type: 'spring',
        delay: 1,
      },
    },
  };

  const handleClickMenu = ({ link }: ProjectLink) => {
    router.push(link);
  };

  return (
    <motion.div initial={false} animate={show ? 'show' : 'hidden'}>
      <motion.div
        className="absolute top-0 left-0 block h-full w-full origin-top  bg-neutral-300
        dark:bg-neutral-900"
        variants={bgVariants}
      />
      <motion.ul className="nav-socials" variants={ulVariants}>
        <motion.li className="nav-socials__item" variants={liVariants}>
          <span className="title">Socials</span>
        </motion.li>
        {[...WEBSITE_SOCIALS].map((m, k) => (
          <motion.li
            key={`${k}-${m.id}`}
            className="nav-socials__item"
            variants={liVariants}
            onClick={() => handleClickMenu(m)}
          >
            <span className="title">{m.label}</span>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
};

export default NavFullSocials;
