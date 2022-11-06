import React from 'react';
import type { FC } from 'react';
import SlickSlider from 'src/components/SlickSlider';
import ImageComponent from 'src/components/common/ImageComponent';
import RichText from 'src/components/common/RichText';
import CaseStudyBanner from 'src/components/sections/case-studies/CaseStudyBanner';
import MoreCaseStudies from 'src/components/sections/case-studies/MoreCaseStudies';
import { getAllCaseStudiesPages, getCaseStudy, getNextCaseStudy } from 'src/lib/caseStudy/caseStudy';
import type { getCaseStudyReturnType, getNextCaseStudyReturnType } from 'src/lib/caseStudy/caseStudy';
import type { CONTENTFUL_IMAGE_ASSET_TYPE } from 'src/types/contentful';
import PageWrapper from 'src/wrappers/PageWrapper';

export type CaseStudyPageProps = {
  caseStudyData: getCaseStudyReturnType;
  nextCaseStudy: getNextCaseStudyReturnType;
};

const CaseStudyPage: FC<CaseStudyPageProps> = (props) => {
  const { caseStudyData, nextCaseStudy } = props;
  const { problem, samplesOrImagesCollection, solution } = caseStudyData;
  const { items: nextCaseStudyItems } = nextCaseStudy;

  return (
    <PageWrapper
      seoProps={{
        title: 'Case Study',
      }}
      mainClass="home-page"
    >
      <CaseStudyBanner {...caseStudyData} />
      <section className="problem">
        <div className="container flex justify-center">
          <div className="w-full sm:w-1/2 flex-col flex">
            <h2 className="text-2xl">Problem</h2>
            {problem && <RichText content={problem.json} />}
          </div>
        </div>
      </section>
      <section className="sample-images">
        {samplesOrImagesCollection && samplesOrImagesCollection.items.length > 1 ? (
          <SlickSlider<CONTENTFUL_IMAGE_ASSET_TYPE>
            slickSettings={{
              variableWidth: true,
              infinite: false,
            }}
            renderer={(item, key) => (
              <div key={key}>
                <div className="relative w-[50vw] h-[500px] ">
                  <ImageComponent src={item.url} alt={item.title} layout="fill" />
                </div>
              </div>
            )}
            items={samplesOrImagesCollection.items}
          />
        ) : (
          <div className="w-full h-[500px] relative">
            <ImageComponent src={samplesOrImagesCollection.items[0]?.url} layout="fill" />
          </div>
        )}
      </section>
      <section className="solution">
        <div className="container flex justify-center">
          <div className="w-full sm:w-1/2 flex-col flex">
            <h2 className="text-2xl">Solution</h2>
            {solution && <RichText content={solution.json} />}
          </div>
        </div>
      </section>
      <MoreCaseStudies items={nextCaseStudyItems} />
    </PageWrapper>
  );
};

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const caseStudyData = await getCaseStudy(params.slug);
  const nextCaseStudy = await getNextCaseStudy({ exceptSlug: params.slug });

  return {
    props: {
      caseStudyData,
      nextCaseStudy,
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
