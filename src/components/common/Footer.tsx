import ProjectLogo from './ProjectLogo';
import React from 'react';
import type { FC } from 'react';
import type { ProjectStateTypes } from 'src/types/project';

export type FooterProps = ProjectStateTypes;

const Footer: FC<FooterProps> = (props) => {
  const { isDarkMode } = props;

  return (
    <footer className="flex h-[100px] w-full items-center justify-center border dark:bg-neutral-800">
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        className="flex items-center justify-center"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{' '}
        <span className="ml-2 h-5">
          <ProjectLogo isDarkMode={isDarkMode} />
        </span>
      </a>
    </footer>
  );
};

export default Footer;
