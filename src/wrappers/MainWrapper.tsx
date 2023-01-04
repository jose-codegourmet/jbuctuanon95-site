import type { FC, ReactElement, ReactNode } from 'react';
import React from 'react';
import Footer from 'src/components/common/Footer';
import type { SeoProps } from 'src/components/common/Seo';
import type { PageBannerSectionProps } from 'src/components/sections/common/PageBannerSection';
import PageBannerSection from 'src/components/sections/common/PageBannerSection';
import type { ProjectStateTypes } from 'src/types/project';

export interface MainWrapperProps extends ProjectStateTypes {
  children?: ReactNode | ReactElement;
  seoProps: SeoProps;
  hasFooter?: boolean;
  mainClass?: string;
  pageBannerProps?: PageBannerSectionProps;
}

const MainWrapper: FC<MainWrapperProps> = (props) => {
  const { pageBannerProps, isDarkMode, children, hasFooter = true, mainClass } = props;

  return (
    <>
      <main className={`${mainClass}`}>
        {pageBannerProps && <PageBannerSection {...pageBannerProps} />}
        {children}
      </main>
      {hasFooter && <Footer isDarkMode={isDarkMode} />}
    </>
  );
};

export default MainWrapper;
