import { omit } from 'lodash-es';
import type { ImageProps } from 'next/image';
import Image from 'next/image';
import React from 'react';
import type { FC } from 'react';
import LogoOnBlack from 'src/images/logo_on_black_bg.svg';
import LogoOnWhite from 'src/images/logo_on_white_bg.svg';

export interface FooterProps extends Omit<ImageProps, 'src'> {
  isDarkBg?: boolean;
  logoAlt?: string;
}

const ProjectLogo: FC<FooterProps> = (props) => {
  const { isDarkBg, logoAlt, width = 70, height = 50 } = props;

  const imgProps: ImageProps = {
    src: isDarkBg ? LogoOnBlack : LogoOnWhite,
    width,
    height,
    ...omit({ ...props }, ['logoSrc', 'width', 'height', 'alt']),
  };

  return <Image alt={logoAlt || 'Project X'} {...imgProps} />;
};

export default ProjectLogo;
