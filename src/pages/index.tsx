import type { FC } from 'react';
import { useEffect } from 'react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CTASection from 'src/components/sections/common/CTASection';
import AboutSection from 'src/components/sections/home/AboutSection';
import CaseStudiesSection from 'src/components/sections/home/CaseStudiesSection';
import ClientsSection from 'src/components/sections/home/ClientsSection';
import HeroSection from 'src/components/sections/home/HeroSection';
import { getAllCaseStudies } from 'src/lib/caseStudy/caseStudy';
import type { getAllCaseStudiesReturnType } from 'src/lib/caseStudy/caseStudy';
import type { RootState } from 'src/redux/reducers';
import { updateAnimationState } from 'src/redux/reducers/gltfAnimations';
import MainWrapper from 'src/wrappers/MainWrapper';

interface HomeProps {
  caseStudies: getAllCaseStudiesReturnType;
}

const Home: FC<HomeProps> = (props) => {
  const { caseStudies } = props;
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state: RootState) => state.project.isDarkMode);

  useEffect(() => {
    dispatch(updateAnimationState('visible'));
  }, []);

  return (
    <MainWrapper
      seoProps={{
        title: 'home',
      }}
      mainClass="home-page"
      isDarkMode={isDarkMode}
      hasFooter={false}
    >
      <HeroSection isDarkMode={isDarkMode} />
      <AboutSection />
      <ClientsSection />
      <CaseStudiesSection caseStudies={caseStudies} />
      <CTASection />
    </MainWrapper>
  );
};

export async function getStaticProps() {
  const data = await getAllCaseStudies({ limit: 5 });

  return {
    props: {
      caseStudies: data,
    },
  };
}

export default Home;
