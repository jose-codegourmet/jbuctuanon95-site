import type { FC } from 'react';
import React from 'react';
import CaseStudyCard from 'src/components/cards/CaseStudyCard';
import { getAllCaseStudies } from 'src/lib/caseStudy/caseStudy';
import type { getAllCaseStudiesReturnType } from 'src/lib/caseStudy/caseStudy';
import PageWrapper from 'src/wrappers/PageWrapper';

export type CaseStudiesPageProps = {
  caseStudies: getAllCaseStudiesReturnType;
};

const CaseStudiesPage: FC<CaseStudiesPageProps> = (props) => {
  const { caseStudies } = props;

  return (
    <PageWrapper
      seoProps={{
        title: 'Case Studies',
      }}
      mainClass="case-studies"
      pageBannerProps={{
        title: 'Case Studies',
      }}
    >
      <section>
        <div className="container">
          <div className="grid grid-cols-3 gap-8">
            {caseStudies.items.map((cs, k) => (
              <CaseStudyCard {...cs} key={k} bannerProps={{ className: 'object-cover' }} />
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export async function getServerSideProps() {
  const data = await getAllCaseStudies();

  return {
    props: {
      caseStudies: data,
    },
  };
}

export default CaseStudiesPage;
