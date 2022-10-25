import Head from 'next/head';
import React from 'react';
import type { FC } from 'react';

export type SeoProps = {
  title?: string;
  description?: string;
  favicon?: string;
};

const Seo: FC<SeoProps> = (props) => {
  const {
    title = 'Jose Adrian Buctuanon',
    description = 'Generated by Code Gourmet IO',
    favicon = '/favicon.ico',
  } = props;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href={favicon} />
    </Head>
  );
};

export default Seo;
