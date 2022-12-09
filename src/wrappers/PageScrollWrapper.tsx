import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import type { FC, MutableRefObject, ReactElement, ReactNode } from 'react';
import React, { useCallback, useLayoutEffect, useRef, useState } from 'react';
import ResizeObserver from 'resize-observer-polyfill';

export interface PageScrollWrapperProps {
  children?: ReactNode | ReactElement;
}

const PageScrollWrapper: FC<PageScrollWrapperProps> = (props) => {
  const { children } = props;

  // scroll container
  const pageRef = useRef() as MutableRefObject<HTMLDivElement>;

  // page scrollable height based on content length
  const [pageHeight, setPageHeight] = useState(0);

  // update scrollable height when browser is resizing
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const resizePageHeight = useCallback((entries: any) => {
    for (const entry of entries) {
      setPageHeight(entry.contentRect.height);
    }
  }, []);

  // observe when browser is resizing
  useLayoutEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => resizePageHeight(entries));

    if (pageRef?.current) {
      resizeObserver.observe(pageRef.current);
    }

    return () => resizeObserver.disconnect();
  }, [pageRef, resizePageHeight]);

  const { scrollY } = useScroll();
  const transform = useTransform(scrollY, [0, pageHeight], [0, -pageHeight]);
  const physics = { damping: 15, mass: 0.27, stiffness: 55 }; // easing of smooth scroll
  const spring = useSpring(transform, physics); // apply easing to the negative scroll value

  return (
    <>
      <motion.div
        ref={pageRef}
        style={{ y: spring }} // translateY of scroll container using negative scroll value
        className="page-container fixed top-0 left-0 z-20 w-full"
      >
        {children}
      </motion.div>
      <div className="page-proxy relative w-full" style={{ height: pageHeight }}></div>
    </>
  );
};

export default PageScrollWrapper;
