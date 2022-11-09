import type { FC } from 'react';
import React from 'react';
import { useSelector } from 'react-redux';
import { Parallax } from 'react-scroll-parallax';
import CaseStudiesSection from 'src/components/sections/home/CaseStudiesSection';
import ClientsSection from 'src/components/sections/home/ClientsSection';
import ApolloModel from 'src/components/threedee/ApolloModel';
import { getAllCaseStudies } from 'src/lib/caseStudy/caseStudy';
import type { getAllCaseStudiesReturnType } from 'src/lib/caseStudy/caseStudy';
import type { RootState } from 'src/redux/reducers';
import PageWrapper from 'src/wrappers/PageWrapper';

interface HomeProps {
  caseStudies: getAllCaseStudiesReturnType;
}

const Home: FC<HomeProps> = (props) => {
  // console.log('++props === ', props);
  const { caseStudies } = props;
  const isDarkMode = useSelector((state: RootState) => state.project.isDarkMode);

  return (
    <PageWrapper
      seoProps={{
        title: 'home',
      }}
      mainClass="home-page"
    >
      <div className="threeFiberObject--apollo-head threeFiberObject top-[100px] absolute right-0">
        <ApolloModel isDarkMode={isDarkMode} />
      </div>
      <section id="home" className="hero-section pt-[100px] sm:pt-0 items-start sm:items-center h-screen flex relative">
        <div className="container flex items-start">
          <div className="w-2/3 lg:w-1/2">
            <h5 className="text-lg sm:text-xl md:text-2xl leading-none m-0 uppercase">I am a</h5>
            <h1 className="m-0 text-3xl sm:text-4xl md:text-6xl leading-none h-auto">Fullstack Developer &</h1>
            <h1 className="m-0 text-3xl sm:text-4xl md:text-6xl leading-none h-auto">Web Designer</h1>
            <p className="text-base lg:text-2xl">
              I am a front-end developer based in
              <span className="text-primary">12.8797° N, 121.7740° E</span>. I've been consulting in graphic design,
              branding, web design, and web development for many years. I enjoy coming up with solutions to problems and
              pushing my creative boundaries. I adore model kits and sneakers as well.
            </p>
            <button className="button-primary">let's talk</button>
          </div>
        </div>
      </section>
      <Parallax speed={-20}>
        <section id="about" className="about-section py-10 h-screen sm:mt-0 mt-[40%]">
          <div className="container">
            <div className="lg:w-2/4 w-full md:w-2/3 mx-auto">
              <p className="text-lg md:text-4xl text-center">
                I work as a front-end developer for Shopify and React in the Philippines. I combine intelligent strategy
                and creativity to make projects for huge organizations and start-ups stand out. I am a full-stack
                developer who also works part-time for myself. A startup that focuses on creating commercial solutions
                for medium-sized to large businesses. I have also led and participated in many projects, from e-commerce
                to business dashboards.
              </p>
            </div>
          </div>
        </section>
      </Parallax>
      <ClientsSection isDarkMode={isDarkMode} />
      <CaseStudiesSection caseStudies={caseStudies} />
      <section id="lets-connect" className="companies-section py-10 relative ">
        <div className="container flex w-full h-auto min-h-[500px] items-center">
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
    </PageWrapper>
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
