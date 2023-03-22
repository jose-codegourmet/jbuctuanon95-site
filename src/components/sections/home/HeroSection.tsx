import { differenceInCalendarYears } from 'date-fns';
import React from 'react';
import type { FC } from 'react';
import AnimationStateTrigger from 'src/components/common/AnimationStateTrigger';

const HeroSection: FC = () => {
  const startDate = new Date(2016, 6, 1); // June 1, 2016
  const endDate = new Date(); // current date

  const yearDifference = differenceInCalendarYears(endDate, startDate);

  return (
    <section id="home" className="hero-section ">
      <div className="container flex items-center">
        <div className="w-full">
          <AnimationStateTrigger animation="visible" />
          <h1 className="hero-section__title">
            Expert in developing and designing websites that drive business growth
          </h1>
          <p className="mx-auto text-base lg:text-4xl">
            I'm Jose, a fullstack developer with {yearDifference} years of experience. I excel in frontend and backend
            development, especially with ReactJS and Shopify. I love using my skills to help clients build successful
            websites.
          </p>
          {/* <button className="button-primary">let's talk</button> */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
