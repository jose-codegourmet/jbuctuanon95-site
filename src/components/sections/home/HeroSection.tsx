import { differenceInCalendarYears } from 'date-fns';
import React from 'react';
import type { FC } from 'react';
import AnimationStateTrigger from 'src/components/common/AnimationStateTrigger';

const HeroSection: FC = () => {
  const startDate = new Date(2016, 6, 1); // June 1, 2016
  const endDate = new Date(); // current date

  const yearDifference = differenceInCalendarYears(endDate, startDate);

  return (
    <section
      id="home"
      className="hero-section relative flex h-screen items-start pt-[100px] sm:items-end sm:pt-0 sm:pb-10"
    >
      <div className="container flex items-start">
        <div className="w-full lg:w-2/3">
          <h1 className="m-0 mb-10 h-auto text-3xl leading-snug sm:text-4xl md:text-6xl">
            Expert in developing and designing websites that drive business growth
          </h1>
          <p className="w-2/3 text-base lg:text-2xl">
            I'm Jose, a fullstack developer with {yearDifference} years of experience. I excel in frontend and backend
            development, especially with ReactJS and Shopify. I love using my skills to help clients build successful
            websites.
          </p>
          <button className="button-primary">let's talk</button>
          <AnimationStateTrigger animation="visible" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
