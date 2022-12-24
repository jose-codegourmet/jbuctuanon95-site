import React from 'react';
import type { FC } from 'react';
import AnimationStateTrigger from 'src/components/common/AnimationStateTrigger';

const HeroSection: FC = () => {
  return (
    <section
      id="home"
      className="hero-section relative flex h-screen items-start pt-[100px] sm:items-end sm:pt-0 sm:pb-10"
    >
      <div className="container flex items-start">
        <div className="w-2/3 lg:w-2/3">
          <h1 className="m-0 mb-10 h-auto text-3xl leading-snug sm:text-4xl md:text-7xl">
            I develop and design websites that help companies grow
          </h1>
          <p className="text-base lg:text-2xl">Hi my name is Jose and I am a fullstack developer</p>
          <button className="button-primary">let's talk</button>
          <AnimationStateTrigger animation="visible" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
