import ProjectLogo from './ProjectLogo';
import React from 'react';
import type { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer className="flex h-[100px] w-full items-center justify-center border">
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        className="flex items-center justify-center"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{' '}
        <span className="ml-2 h-5">
          <ProjectLogo />
        </span>
      </a>
    </footer>
  );
};

export default Footer;
