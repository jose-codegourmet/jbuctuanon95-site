import type { FC, ReactElement, ReactNode } from 'react';
import React from 'react';
import { useSelector } from 'react-redux';
import Footer from 'src/components/common/Footer';
import Nav from 'src/components/common/Nav';
import type { SeoProps } from 'src/components/common/Seo';
import Seo from 'src/components/common/Seo';
import type { RootState } from 'src/redux/reducers';
import type { ProjectStateTypes } from 'src/types/project';

export interface PageWrapperProps extends ProjectStateTypes {
  seoProps: SeoProps;
  children?: ReactNode | ReactElement;
  hasNav?: boolean;
  hasFooter?: boolean;
  mainClass?: string;
}

const PageWrapper: FC<PageWrapperProps> = (props) => {
  const { seoProps, children, hasNav = true, hasFooter = true, mainClass } = props;
  const isDarkMode = useSelector((state: RootState) => state.project.isDarkMode);

  return (
    <div
      {...(isDarkMode && {
        'data-mode': 'dark',
      })}
    >
      <Seo {...seoProps} />
      {hasNav && <Nav isDarkMode={isDarkMode} />}
      <main className={`pt-10 ${mainClass}`}>{children}</main>
      {hasFooter && <Footer isDarkMode={isDarkMode} />}
    </div>
  );
};

export default PageWrapper;
