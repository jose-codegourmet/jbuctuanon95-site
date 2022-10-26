import NavMenu from './NavMenu';
import ProjectLogo from './ProjectLogo';
import cn from 'classnames';
import React from 'react';
import type { FC } from 'react';
import { BsFillMoonStarsFill, BsSunFill } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { toggleDarkMode } from 'src/redux/reducers/project';
import type { ProjectStateTypes } from 'src/types/project';

export type NavProps = ProjectStateTypes;

const Nav: FC<NavProps> = (props) => {
  const { isDarkMode } = props;
  const dispatch = useDispatch();

  const handleToggleDarkMode = () => {
    dispatch(toggleDarkMode(!isDarkMode));
  };

  return (
    <nav className="nav">
      <div className="nav__container">
        <div className="nav__logo">
          <ProjectLogo isDarkMode={isDarkMode} width="300px" />
        </div>
        <NavMenu className="nav__menu" />
        <button
          className={cn('nav__toggle-dark-mode', {
            'nav__toggle-dark-mode--active': isDarkMode,
            'nav__toggle-dark-mode--not-active': !isDarkMode,
          })}
          onClick={handleToggleDarkMode}
        >
          <div className="slider">
            <BsSunFill className="sun" />
            <BsFillMoonStarsFill className="moon" />
          </div>
        </button>
      </div>
    </nav>
  );
};

export default Nav;
