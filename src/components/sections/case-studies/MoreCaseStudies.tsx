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
      <div className="container">
        <h3 className="text-2xl"> More Case Studies </h3>
      </div>
      <div className="container grid grid-cols-1 sm:grid-cols-2 gap-20">
        {items.map((i, k) => (
          <div key={k} className="flex flex-col w-full">
            <div className="relative w-full h-[300px]">
              <ImageComponent src={i.banner.url} layout="fill" className="object-cover" />
            </div>
            <div className="w-full flex flex-col">
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
