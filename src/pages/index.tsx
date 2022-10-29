import React from 'react';
import ApolloModel from 'src/components/threedee/ApolloModel';
import PeppeModel from 'src/components/threedee/PeppeModel';
import PageWrapper from 'src/wrappers/PageWrapper';

export default function Home() {
  return (
    <PageWrapper
      seoProps={{
        title: 'home',
      }}
      mainClass="home-page"
    >
      <div className="threeFiberObject--apollo-head threeFiberObject top-[100px] absolute right-0">
        <ApolloModel />
      </div>
      <section id="home" className="hero-section items-center h-screen flex relative">
        <div className="container flex items-start">
          <div className="md:w-1/2 w-full">
            <h5 className="text-2xl leading-none m-0 uppercase">I am a</h5>
            <h1 className="m-0 text-6xl leading-none h-auto">Fullstack Developer &</h1>
            <h1 className="m-0 text-6xl leading-none h-auto">Web Designer</h1>
            <p className="text-2xl">
              I am a front-end developer based in
              <span className="text-primary">12.8797° N, 121.7740° E</span>. I've been consulting in graphic design,
              branding, web design, and web development for many years. I enjoy coming up with solutions to problems and
              pushing my creative boundaries. I adore model kits and sneakers as well.
            </p>
            <button className="button-primary">let's talk</button>
          </div>
        </div>
      </section>
      <section id="about" className="about-section py-10">
        <div className="container">
          <div className="w-3/4 mx-auto">
            <p className="text-4xl text-center">
              I work as a front-end developer for Shopify and React in the Philippines. I combine intelligent strategy
              and creativity to make projects for huge organizations and start-ups stand out. I am a full-stack
              developer who also works part-time for myself. A startup that focuses on creating commercial solutions for
              medium-sized to large businesses. I have also led and participated in many projects, from e-commerce to
              business dashboards.
            </p>
          </div>
        </div>
      </section>
      <section id="companies" className="companies-section py-10">
        <div className="container flex w-full items-start">
          <div className="w-1/3">
            <h1 className="text-4xl">Organizations I've worked for</h1>
            <p className="text-2xl">
              After six years of practice. I've had the pleasure of working for both fantastic start-ups and significant
              corporations. Both of us have benefited from their assistance in helping me advance as a developer.
            </p>
          </div>
          <div className="w-2/6 px-8"></div>
        </div>
      </section>
      <section id="lets-connect" className="companies-section py-10 relative ">
        <div className="container flex w-full h-auto min-h-[500px] items-center">
          <div className="w-1/3">
            <h1 className="text-4xl">Let's connect</h1>
            <p className="text-2xl">
              My mailbox is always open, even though I'm not seeking for any new possibilities right now. I will do my
              best to get back to you whether you have a question or are just looking to say hello!
            </p>
            <button className="button-primary">Leave a message</button>
          </div>
        </div>
        <div className="w-2/3 absolute h-full right-0 top-0 flex items-center">
          <div className="threeFiberObject threeFiberObject--peppe  ">
            <PeppeModel />
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
