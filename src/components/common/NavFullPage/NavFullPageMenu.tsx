import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import React from 'react';
import type { FC } from 'react';
import { useDispatch } from 'react-redux';
import { WEBSITE_NAV } from 'src/constants/project';
import { toggleDropDownMenu } from 'src/redux/reducers/project';
import type { ProjectLink } from 'src/types/project';

const NavFullPageMenu: FC<{ show: boolean }> = ({ show }) => {
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
    <motion.div className="w-full" initial={false} animate={show ? 'show' : 'hidden'}>
      <motion.ul className="nav-menu" variants={ulVariants}>
        {[...WEBSITE_NAV].map((m, k) => (
          <motion.li
            key={`${k}-${m.id}`}
            className="nav-menu__item"
            variants={liVariants}
            onClick={() => handleClickMenu(m)}
          >
            <span className="title">{m.label}</span>
            <span className="count-container">
              <span className="count">{`${k + 1}`.padStart(2, '0')}</span>
            </span>
            {k !== WEBSITE_NAV.length - 1 && <div className="nav-menu__item__line" />}
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
};

export default NavFullPageMenu;
