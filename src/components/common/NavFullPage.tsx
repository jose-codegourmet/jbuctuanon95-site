import cn from 'classnames';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import React from 'react';
import type { FC } from 'react';
import { useDispatch } from 'react-redux';
import { WEBSITE_NAV, WEBSITE_SOCIALS } from 'src/constants/project';
import { toggleDropDownMenu } from 'src/redux/reducers/project';
import type { ProjectLink } from 'src/types/project';

export type NavMenuProps = {
  show: boolean;
};

const NavFullPageContainer = ({ children, show }: { children: React.ReactNode; show: boolean }) => {
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

const NavFullPageMenu = ({ show }: { show: boolean }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const ulVariants = {
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        staggerChildren: 0.15,
        delay: WEBSITE_NAV.length * 0.75,
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

  const handleClickMenu = ({ link }: ProjectLink) => {
    router.push(link);
    dispatch(toggleDropDownMenu(false));
  };

  return (
    <motion.div initial={false} animate={show ? 'show' : 'hidden'}>
      <motion.ul className="nav-menu" variants={ulVariants}>
        {[...WEBSITE_NAV].map((m, k) => (
          <motion.li
            key={`${k}-${m.id}`}
            className="nav-menu__item"
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

const NavFullSocials = ({ show }: { show: boolean }) => {
  const dispatch = useDispatch();
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
        delay: WEBSITE_NAV.length * 0.75,
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
    dispatch(toggleDropDownMenu(false));
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

const NavFullPage: FC<NavMenuProps> = (props) => {
  const { show } = props;

  return (
    <NavFullPageContainer show={show}>
      <div className="flex w-full flex-wrap">
        <div className="nav-full-page__menu">
          <NavFullPageMenu show={show} />
        </div>
        <div className="nav-full-page__socials">
          <NavFullSocials show={show} />
        </div>
      </div>
    </NavFullPageContainer>
  );
};

export default NavFullPage;
