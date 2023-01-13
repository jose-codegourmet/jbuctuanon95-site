import React from 'react';
import type { FC } from 'react';

const AboutSection: FC = () => {
  return (
    <section id="about" className="about-section mt-[40%] min-h-screen py-10 sm:mt-0">
      <div className="container">
        <div className="mx-auto w-full md:w-2/4 md:text-4xl">
          <p className="text-center leading-relaxed">
            I am a front-end developer based in the Philippines with expertise in Shopify and React. In my role, I use a
            combination of strategic thinking and creative problem-solving to create standout projects for a range of
            clients, including both large organizations and start-ups.
          </p>
          <p className="text-center leading-relaxed">
            In addition to my full-time work as a developer, I also run my own part-time business focused on creating
            commercial solutions for medium to large businesses. Through this venture, I have had the opportunity to
            lead and participate in a variety of projects, from e-commerce websites to business dashboards. My diverse
            experience has allowed me to develop a wide range of skills and I am always looking for new challenges to
            tackle.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
