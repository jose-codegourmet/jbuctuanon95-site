import Link from 'next/link';
import React from 'react';
import type { FC } from 'react';
import ImageComponent from 'src/components/common/ImageComponent';
import RichText from 'src/components/common/RichText';
import type { getNextCaseStudyReturnType } from 'src/lib/caseStudy/caseStudy';

export type MoreCaseStudiesProps = Omit<getNextCaseStudyReturnType, 'total'>;

const MoreCaseStudies: FC<MoreCaseStudiesProps> = (props) => {
  const { items } = props;

  return (
    <section id="more-case-studies" className="more-case-studies-section">
      <div className="container w-full gap-20 md:w-2/3 lg:w-1/2 lg:grid-cols-2">
        <h3 className="text-2xl"> More Case Studies </h3>
      </div>
      <div className="container grid w-full grid-cols-1 gap-20 md:w-2/3 lg:w-1/2 lg:grid-cols-2">
        {items.map((i, k) => (
          <div key={k} className="flex w-full flex-col">
            <div className="relative h-[300px] w-full">
              <ImageComponent src={i.banner.url} layout="fill" className="object-cover" />
            </div>
            <div className="flex w-full flex-col">
              <Link passHref href={`/case-studies/${i.slug}`}>
                <a className="text-2xl font-bold">{i.title}</a>
              </Link>

              <RichText content={i.excerpt.json} />
              <Link href={`/case-studies/${i.slug}`}>
                <a className="button button-primary">View Case Study</a>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MoreCaseStudies;
