import type { FC } from 'react';
import React from 'react';
import CaseStudySection from 'src/components/sections/case-studies/CaseStudySection';
import { getAllCaseStudies } from 'src/lib/caseStudy/caseStudy';
import type { getAllCaseStudiesReturnType } from 'src/lib/caseStudy/caseStudy';
import MainWrapper from 'src/wrappers/MainWrapper';

export type CaseStudiesPageProps = {
  caseStudies: getAllCaseStudiesReturnType;
};

const CaseStudiesPage: FC<CaseStudiesPageProps> = (props) => {
  const { caseStudies } = props;

  return (
    <MainWrapper
      seoProps={{
        title: 'Case Studies',
      }}
      mainClass="case-studies"
      pageBannerProps={{
        title: 'Case Studies',
      }}
    >
      {caseStudies.items.map((cs, k) => (
        <CaseStudySection {...cs} key={k} isMediaLeft={k % 2 === 0} bannerProps={{ className: 'object-cover' }} />
      ))}
    </MainWrapper>
  );
};

export async function getStaticProps() {
  const data = await getAllCaseStudies();

  return {
    props: {
      caseStudies: data,
    },
  };
}

export default CaseStudiesPage;
