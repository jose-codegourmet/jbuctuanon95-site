import type { FC } from 'react';
import React from 'react';
import { useSelector } from 'react-redux';
import AboutSection from 'src/components/sections/home/AboutSection';
import type { RootState } from 'src/redux/reducers';
import MainWrapper from 'src/wrappers/MainWrapper';

const About: FC = () => {
  const isDarkMode = useSelector((state: RootState) => state.project.isDarkMode);

  return (
    <MainWrapper
      seoProps={{
        title: 'About',
      }}
      mainClass="about-page"
      isDarkMode={isDarkMode}
    >
      <AboutSection />
    </MainWrapper>
  );
};

export default About;
