import { omit } from 'lodash-es';
import type { ImageProps } from 'next/image';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import type { FC } from 'react';
import type { ProjectStateTypes } from 'src/types/project';

export interface ImageComponentProps extends ProjectStateTypes, Omit<ImageProps, 'src'> {
  src: string;
  darkModeSrc?: string;
  url?: string;
}

const ImageComponent: FC<ImageComponentProps> = (props) => {
  const { url, isDarkMode, src, darkModeSrc, alt = ' Jose Adrian Buctuanon' } = props;

  const imgProps: ImageProps = {
    src,
    ...omit({ ...props }, ['isDarkMode', 'src', 'darkModeSrc']),
  };

  if (isDarkMode && darkModeSrc) {
    imgProps.src = darkModeSrc;
  }

  if (url) {
    return (
      <Link href={url} passHref>
        <a target="_blank">
          <Image alt={alt} {...imgProps} className="object-contain" />
        </a>
      </Link>
    );
  }

  return <Image alt={alt} {...imgProps} className="object-contain" />;
};

export default ImageComponent;
