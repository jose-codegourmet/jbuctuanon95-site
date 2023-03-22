import PageScrollWrapper from './PageScrollWrapper';
import cn from 'classnames';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import type { FC, ReactElement, ReactNode } from 'react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import IndexScene from 'src/components/common/IndexScene';
import Nav from 'src/components/common/Nav';
import NavFullPage from 'src/components/common/NavFullPage/NavFullPage';
import type { RootState } from 'src/redux/reducers';
import { updateAnimationState } from 'src/redux/reducers/project';
import type { ProjectStateTypes } from 'src/types/project';

export interface PageWrapperProps extends ProjectStateTypes {
  children?: ReactNode | ReactElement;
  hasNav?: boolean;
}

const PageWrapper: FC<PageWrapperProps> = (props) => {
  const { children, hasNav = true } = props;
  const {
    project: { isDarkMode, showDDMenu },
    gltf: gltfAnimationState,
  } = useSelector((state: RootState) => state);

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
      className={cn('project-wrapper', {
        'project-wrapper--3d-loaded': gltfAnimationState?.loaded,
      })}
      {...(isDarkMode && {
        'data-mode': 'dark',
      })}
    >
      <div className="main-wrapper">
        {hasNav && <Nav isDarkMode={isDarkMode} isShowDDMenu={showDDMenu} />}
        <NavFullPage show={showDDMenu} />

        <IndexScene isDarkMode={isDarkMode} isStopAnimating={showDDMenu} gltfAnimationState={gltfAnimationState} />

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
