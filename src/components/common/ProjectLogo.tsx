import { omit } from 'lodash-es';
import type { ImageProps } from 'next/image';
import Image from 'next/image';
import React from 'react';
import type { FC } from 'react';
import type { ProjectStateTypes } from 'src/types/project';

export interface ProjectLogoProps extends ProjectStateTypes, Omit<ImageProps, 'src'> {
  logoAlt?: string;
}

const ProjectLogo: FC<ProjectLogoProps> = (props) => {
  const { isDarkMode, logoAlt } = props;

  const imgProps: ImageProps = {
    src: isDarkMode ? '/project/logo_on_black_bg.svg' : '/project/logo_on_white_bg.svg',
    ...omit({ ...props }, ['alt', 'isDarkMode']),
  };

  return <Image alt={logoAlt || 'Project X'} {...imgProps} />;
};

export default ProjectLogo;
