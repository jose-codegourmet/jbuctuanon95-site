import React from 'react';
import type { FC } from 'react';

const AboutSection: FC = () => {
  return (
    <section id="about" className="about-section mt-[40%] min-h-screen py-10 sm:mt-0">
      <div className="container">
        <div className="mx-auto w-full md:w-2/3">
          <p className="text-center text-lg leading-relaxed md:text-6xl">
            I work as a front-end developer for Shopify and React in the Philippines. I combine intelligent strategy and
            creativity to make projects for huge organizations and start-ups stand out. I am a full-stack developer who
            also works part-time for myself. A startup that focuses on creating commercial solutions for medium-sized to
            large businesses. I have also led and participated in many projects, from e-commerce to business dashboards.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
