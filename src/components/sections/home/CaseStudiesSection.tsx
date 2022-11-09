import Link from 'next/link';
import React from 'react';
import type { FC } from 'react';
import CaseStudyCard from 'src/components/cards/CaseStudyCard';
import type { getAllCaseStudiesReturnType } from 'src/lib/caseStudy/caseStudy';

export type CaseStudiesSectionProps = {
  caseStudies: getAllCaseStudiesReturnType;
};

const CaseStudiesSection: FC<CaseStudiesSectionProps> = (props) => {
  const { caseStudies } = props;

  return (
    <section id="case-studies" className="case-studies-section py-10">
      <div className="container ">
        <div className="w-full lg:w-1/3 m-auto flex flex-col justify-start items-center text-center mb-10">
          <h1 className="text-2xl lg:text-4xl">Case Studies</h1>
          <p className="text-lg lg:text-2xl">
            a selection of accomplishments from various clients, along with my solutions.
          </p>
        </div>
      </div>
      <div className="container w-full">
        <div className="w-full mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {caseStudies.items.map((cs, k) => (
            <CaseStudyCard {...cs} key={k} bannerProps={{ className: 'object-cover' }} />
          ))}
          <div className="col-span-full flex justify-center">
            <Link passHref href="/case-studies">
              <a className="button button-primary">See More</a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
