import PageScrollWrapper from './PageScrollWrapper';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import type { FC, ReactElement, ReactNode } from 'react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Nav from 'src/components/common/Nav';
import NavFullPage from 'src/components/common/NavFullPage/NavFullPage';
import HomeScene from 'src/components/threedee/HomeScene';
import type { RootState } from 'src/redux/reducers';
import { updateAnimationState } from 'src/redux/reducers/project';
import type { ProjectStateTypes } from 'src/types/project';

export interface PageWrapperProps extends ProjectStateTypes {
  children?: ReactNode | ReactElement;
  hasNav?: boolean;
}

const PageWrapper: FC<PageWrapperProps> = (props) => {
  const { children, hasNav = true } = props;
  const { isDarkMode, showDDMenu, gltfAnimationState } = useSelector((state: RootState) => state.project);

  const dispatch = useDispatch();
  const { asPath } = useRouter();

  if (asPath !== '/') {
    dispatch(updateAnimationState('hidden'));
  }

  const variants = {
    in: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
    out: {
      opacity: 0,
      scale: 1,
      y: 100,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div
      {...(isDarkMode && {
        'data-mode': 'dark',
      })}
    >
      <div className="main-wrapper">
        {hasNav && <Nav isDarkMode={isDarkMode} isShowDDMenu={showDDMenu} />}
        <NavFullPage show={showDDMenu} />
        <div className="threeFiberObject--apollo-head threeFiberObject absolute top-[100px] right-0">
          <HomeScene
            isDarkMode={isDarkMode}
            currPage={asPath}
            isStopAnimating={showDDMenu}
            gltfAnimationState={gltfAnimationState}
          />
        </div>
        <PageScrollWrapper>
          <motion.div key={asPath} variants={variants} animate="in" initial="out" exit="out">
            {children}
          </motion.div>
        </PageScrollWrapper>
      </div>
    </div>
  );
};

export default PageWrapper;
