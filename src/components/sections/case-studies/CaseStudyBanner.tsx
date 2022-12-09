import Link from 'next/link';
import React from 'react';
import type { FC } from 'react';
import ImageComponent from 'src/components/common/ImageComponent';
import Pills from 'src/components/common/Pills';
import RichText from 'src/components/common/RichText';
import type { CASE_STUDY_PAGE_FIELDS_TYPE } from 'src/lib/caseStudy/types';
import type { ProjectStateTypes } from 'src/types/project';

export interface CaseStudySectionProps extends ProjectStateTypes, CASE_STUDY_PAGE_FIELDS_TYPE {}

const CaseStudyBanner: FC<CaseStudySectionProps> = (props) => {
  const {
    banner: { url },
    title,
    slug,
    techStack,
    roles,
    overview,
    websiteLink,
  } = props;

  return (
    <section id={`${slug}-banner`} className="w-full">
      <div className="container flex flex-col items-end justify-between py-[10rem] lg:flex-row">
        <div className="flex w-full flex-col p-0 md:w-1/2 md:p-2 lg:w-1/3">
          <h1 className="text-5xl">{title}</h1>
          <Pills
            items={techStack.map((ts) => ({
              label: ts,
            }))}
          />
          {roles && (
            <p className="text-base">
              {roles.map((r, k) => (
                <>
                  <span key={k}>{r}</span>
                  {k !== roles.length - 1 ? ',' : ''}
                </>
              ))}
            </p>
          )}
          {websiteLink && (
            <Link href={websiteLink}>
              <a target="_blank" className="button button-primary">
                Visit Website
              </a>
            </Link>
          )}
        </div>
        {overview && (
          <div className="flex w-full flex-col p-0 md:w-1/2 md:p-2 lg:w-1/3">
            <h2 className="text-2xl">Overview</h2>
            <RichText content={overview.json} />
          </div>
        )}
      </div>
      <div className="container relative h-[600px] w-full">
        <ImageComponent src={url} layout="fill" className="object-cover" />
      </div>
    </section>
  );
};

export default CaseStudyBanner;
