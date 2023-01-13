import ProjectLogo from './ProjectLogo';
import cn from 'classnames';
import { useRouter } from 'next/router';
import React from 'react';
import type { FC } from 'react';
import { BsFillMoonStarsFill, BsSunFill } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { toggleDarkMode, toggleDropDownMenu } from 'src/redux/reducers/project';
import type { ProjectStateTypes } from 'src/types/project';

export type NavProps = ProjectStateTypes;

const Nav: FC<NavProps> = (props) => {
  const { isDarkMode, isShowDDMenu } = props;
  const dispatch = useDispatch();
  const router = useRouter();

  const handleToggleDarkMode = () => {
    dispatch(toggleDarkMode(!isDarkMode));
  };

  const handleDropDown = () => {
    dispatch(toggleDropDownMenu(!isShowDDMenu));
  };

  const handleNavToHome = () => {
    dispatch(toggleDropDownMenu(false));
    router.push('/');
  };

  return (
    <nav className="nav">
      <div className="nav__container">
        <div className="nav__logo">
          <div onClick={handleNavToHome} className="relative h-full w-[150px] cursor-pointer sm:w-[200px] md:w-[350px]">
            <ProjectLogo isDarkMode={isDarkMode} layout="fill" className="object-contain object-left" />
          </div>
        </div>
        <button className="nav__dd-toggle" onClick={handleDropDown}>
          {isShowDDMenu ? 'Close' : 'Menu'}
        </button>
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
