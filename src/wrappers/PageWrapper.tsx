import type { FC, ReactElement, ReactNode } from 'react';
import React from 'react';
import Footer from 'src/components/common/Footer';
import type { SeoProps } from 'src/components/common/Seo';
import Seo from 'src/components/common/Seo';

type PageWrapperProps = {
  seoProps: SeoProps;
  children?: ReactNode | ReactElement;
  hasFooter?: boolean;
  mainClass?: string;
};

const PageWrapper: FC<PageWrapperProps> = (props) => {
  const { seoProps, children, hasFooter = true, mainClass } = props;

  return (
    <>
      <Seo {...seoProps} />
      <main className={mainClass || ''}>{children}</main>
      {hasFooter && <Footer />}
    </>
  );
};

export default PageWrapper;
