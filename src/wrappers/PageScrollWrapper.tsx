import cn from 'classnames';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import type { FC, MutableRefObject, ReactElement, ReactNode } from 'react';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import ResizeObserver from 'resize-observer-polyfill';
import { MOBILE_BREAKPOINT } from 'src/constants/project';

export interface PageScrollWrapperProps {
  children?: ReactNode | ReactElement;
}

const PageScrollWrapper: FC<PageScrollWrapperProps> = (props) => {
  const { children } = props;
  const [isMobile, setIsMobile] = useState(false);

  // scroll container
  const pageHeightRef = useRef() as MutableRefObject<HTMLDivElement>;

  // page scrollable height based on content length
  const [pageHeight, setPageHeight] = useState(0);

  const checkIfMobile = (width: number) => {
    setIsMobile(width < MOBILE_BREAKPOINT);
  };

  // update scrollable height when browser is resizing
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const resizePageWH = useCallback((entries: any) => {
    for (const entry of entries) {
      setPageHeight(entry.contentRect.height);
      checkIfMobile(entry.contentRect.width);
    }
  }, []);

  // observe when browser is resizing
  useEffect(() => {
    const heightResizeObserver = new ResizeObserver((entries) => resizePageWH(entries));

    if (pageHeightRef?.current) {
      heightResizeObserver.observe(pageHeightRef.current);
    }

    return () => heightResizeObserver.disconnect();
  }, [pageHeightRef, resizePageWH]);

  const { scrollY } = useScroll();
  const transform = useTransform(scrollY, [0, pageHeight], [0, -pageHeight]);
  const physics = { damping: 15, mass: 0.27, stiffness: 55 }; // easing of smooth scroll
  const spring = useSpring(transform, physics); // apply easing to the negative scroll value

  return (
    <>
      <motion.div
        ref={pageHeightRef}
        className={cn('page-container  w-full', {
          'fixed top-0 left-0 z-20': !isMobile,
        })}
        style={{ y: !isMobile ? spring : 0 }} // translateY of scroll container using negative scroll value
      >
        {children}
      </motion.div>
      {!isMobile && <div className="page-proxy relative w-full" style={{ height: pageHeight }}></div>}
    </>
  );
};

export default PageScrollWrapper;
