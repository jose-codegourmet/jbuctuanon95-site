import { omit } from 'lodash-es';
import type { ImageProps } from 'next/image';
import Image from 'next/image';
import React from 'react';
import type { FC } from 'react';
import LogoOnBlack from 'src/images/logo_on_black_bg.svg';
import LogoOnWhite from 'src/images/logo_on_white_bg.svg';
import type { ProjectStateTypes } from 'src/types/project';

export interface FooterProps extends ProjectStateTypes, Omit<ImageProps, 'src'> {
  logoAlt?: string;
}

const ProjectLogo: FC<FooterProps> = (props) => {
  const { isDarkMode, logoAlt, width = 70, height = 50 } = props;

  const imgProps: ImageProps = {
    src: isDarkMode ? LogoOnBlack : LogoOnWhite,
    width,
    height,
    ...omit({ ...props }, ['logoSrc', 'width', 'height', 'alt']),
  };

  return <Image alt={logoAlt || 'Project X'} {...imgProps} />;
};

export default ProjectLogo;
