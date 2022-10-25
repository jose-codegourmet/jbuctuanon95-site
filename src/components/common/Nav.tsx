import ProjectLogo from './ProjectLogo';
import React from 'react';
import type { FC } from 'react';
import type { ProjectStateTypes } from 'src/types/project';

export type NavProps = ProjectStateTypes;

const Nav: FC<NavProps> = (props) => {
  const { isDarkMode } = props;

  return (
    <nav className="nav fixed top-0 left-0 w-full z-50 dark:text-white">
      <div className="container py-5 mx-auto bg-primary">
        <ProjectLogo isDarkMode={isDarkMode} width="300px" />
        test
      </div>
    </nav>
  );
};

export default Nav;
