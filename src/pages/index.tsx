import type { FC } from 'react';
import React from 'react';
import { useSelector } from 'react-redux';
import AboutSection from 'src/components/sections/home/AboutSection';
import CaseStudiesSection from 'src/components/sections/home/CaseStudiesSection';
import ClientsSection from 'src/components/sections/home/ClientsSection';
import HeroSection from 'src/components/sections/home/HeroSection';
import { getAllCaseStudies } from 'src/lib/caseStudy/caseStudy';
import type { getAllCaseStudiesReturnType } from 'src/lib/caseStudy/caseStudy';
import type { RootState } from 'src/redux/reducers';
import MainWrapper from 'src/wrappers/MainWrapper';

interface HomeProps {
  caseStudies: getAllCaseStudiesReturnType;
}

const Home: FC<HomeProps> = (props) => {
  const { caseStudies } = props;
  const isDarkMode = useSelector((state: RootState) => state.project.isDarkMode);

  return (
    <MainWrapper
      seoProps={{
        title: 'home',
      }}
      mainClass="home-page"
    >
      <HeroSection />
      <AboutSection />
      <ClientsSection isDarkMode={isDarkMode} />
      <CaseStudiesSection caseStudies={caseStudies} />
      <section id="lets-connect" className="companies-section relative py-10 ">
        <div className="container flex h-auto min-h-[500px] w-full items-center">
          <div className="w-full lg:w-1/3">
            <h1 className="text-2xl lg:text-4xl">Let's connect</h1>
            <p className="text-lg lg:text-2xl">
              My mailbox is always open, even though I'm not seeking for any new possibilities right now. I will do my
              best to get back to you whether you have a question or are just looking to say hello!
            </p>
            <button className="button-primary">Leave a message</button>
          </div>
        </div>
      </section>
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
