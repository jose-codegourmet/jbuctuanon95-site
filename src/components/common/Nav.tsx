import NavMenu from './NavMenu';
import ProjectLogo from './ProjectLogo';
import React from 'react';
import type { FC } from 'react';
import type { ProjectStateTypes } from 'src/types/project';

export type NavProps = ProjectStateTypes;

const Nav: FC<NavProps> = (props) => {
  const { isDarkMode } = props;

  return (
    <nav className="nav">
      <div className="nav__container">
        <div className="nav__logo">
          <ProjectLogo isDarkMode={isDarkMode} width="300px" />
        </div>
        <NavMenu className="nav__menu" />
      </div>
    </nav>
  );
};

export default Nav;
