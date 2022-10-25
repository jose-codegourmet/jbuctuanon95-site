import Head from 'next/head';
import React from 'react';
import type { FC } from 'react';
import { BASE_WEBSITE_NAME } from 'src/constants/project';

export type SeoProps = {
  title?: string;
  description?: string;
  favicon?: string;
};

const Seo: FC<SeoProps> = (props) => {
  const { title, description = 'Fullstack Web Developer', favicon = '/favicon.ico' } = props;

  return (
    <Head>
      <title>{`${BASE_WEBSITE_NAME} ${title && title}`}</title>
      <meta name="description" content={description} />
      <link rel="icon" href={favicon} />
    </Head>
  );
};

export default Seo;
