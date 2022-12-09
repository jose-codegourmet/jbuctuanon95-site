import { useInView } from 'framer-motion';
import React, { useRef } from 'react';
import type { FC } from 'react';
import { useDispatch } from 'react-redux';
import { updateAnimationState } from 'src/redux/reducers/project';

const HeroSection: FC = () => {
  const ref = useRef(null);
  const inView = useInView(ref);
  const dispatch = useDispatch();

  if (inView) {
    dispatch(updateAnimationState('visible'));
  }

  return (
    <section id="home" className="hero-section relative flex h-screen items-start pt-[100px] sm:items-center sm:pt-0">
      <div className="container flex items-start">
        <div className="w-2/3 lg:w-1/2">
          <h5 className="m-0 text-lg uppercase leading-none sm:text-xl md:text-2xl">I am a</h5>
          <h1 className="m-0 h-auto text-3xl leading-none sm:text-4xl md:text-6xl">Fullstack Developer &</h1>
          <h1 className="m-0 h-auto text-3xl leading-none sm:text-4xl md:text-6xl">Web Designer</h1>
          <p className="text-base lg:text-2xl">
            I am a front-end developer based in
            <span className="text-primary">12.8797° N, 121.7740° E</span>. I've been consulting in graphic design,
            branding, web design, and web development for many years. I enjoy coming up with solutions to problems and
            pushing my creative boundaries. I adore model kits and sneakers as well.
          </p>
          <button ref={ref} className="button-primary">
            let's talk
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
