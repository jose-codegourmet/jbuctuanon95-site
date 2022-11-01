import Link from 'next/link';
import type { FC } from 'react';
import React from 'react';
import ImageComponent from 'src/components/common/ImageComponent';
import RichText from 'src/components/common/RichText';
import { getAllCaseStudies } from 'src/lib/caseStudy';
import type { CASE_STUDY_RESULTS_FIELDS_TYPE } from 'src/lib/caseStudy';
import PageWrapper from 'src/wrappers/PageWrapper';

export type CaseStudiesPageProps = {
  caseStudies: {
    items: CASE_STUDY_RESULTS_FIELDS_TYPE[];
  };
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
          <div className="grid-cols-2">
            {caseStudies.items.map((cs, k) => (
              <div className="case-study-block col-span-1 flex flex-col flex-nowrap" key={k}>
                <div className="case-study-block__img pt-[100%] w-full relative">
                  <ImageComponent
                    src={cs.banner.url}
                    alt={cs.title}
                    url={`/case-studies/${cs.slug}`}
                    layout="fill"
                    className="case-study-block__img__src w-full object-cover"
                  />
                </div>
                <div className="case-study-block__info w-full">
                  {cs.title && (
                    <Link passHref href={`/case-studies/${cs.slug}`}>
                      <a className="w-full">
                        <h2 className="text-2xl">{cs.title}</h2>
                      </a>
                    </Link>
                  )}
                  {cs.excerpt && <RichText content={cs.excerpt.json} />}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
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
