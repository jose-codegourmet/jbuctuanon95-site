import React from 'react';
import type { FC } from 'react';
import { useInView } from 'react-intersection-observer';
import { useDispatch } from 'react-redux';
import { updateAnimationState } from 'src/redux/reducers/project';

const AboutSection: FC = () => {
  const { ref, inView } = useInView();
  const dispatch = useDispatch();

  if (inView) {
    dispatch(updateAnimationState('hidden'));
  }

  return (
    <section id="about" className="about-section py-10 h-screen sm:mt-0 mt-[40%]">
      <div className="container">
        <div className="lg:w-2/4 w-full md:w-2/3 mx-auto">
          <p className="text-lg md:text-4xl text-center" ref={ref}>
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
