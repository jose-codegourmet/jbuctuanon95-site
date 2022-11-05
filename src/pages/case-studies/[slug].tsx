import React from 'react';
import type { FC } from 'react';
import { getAllCaseStudiesPages, getCaseStudy } from 'src/lib/caseStudy/caseStudy';
import PageWrapper from 'src/wrappers/PageWrapper';

const CaseStudyPage: FC = (props) => {
  console.log('props == ', props);

  return (
    <PageWrapper
      seoProps={{
        title: 'Case Study',
      }}
      mainClass="home-page"
    >
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
    </PageWrapper>
  );
};

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const caseStudyData = await getCaseStudy(params.slug);

  return {
    props: {
      caseStudyData,
    },
  };
}

export async function getStaticPaths() {
  const items = await getAllCaseStudiesPages();

  return {
    paths: items?.map(({ slug }: { slug: string }) => `/case-studies/${slug}`) ?? [],
    fallback: true,
  };
}

export default CaseStudyPage;
