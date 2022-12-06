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
      <div className="container py-[10rem] flex justify-between items-end lg:flex-row flex-col">
        <div className="md:w-1/2 lg:w-1/3 w-full flex flex-col md:p-2 p-0">
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
          <div className="w-full md:w-1/2 lg:w-1/3 flex flex-col md:p-2 p-0">
            <h2 className="text-2xl">Overview</h2>
            <RichText content={overview.json} />
          </div>
        )}
      </div>
      <div className="h-[600px] container w-full relative">
        <ImageComponent src={url} layout="fill" className="object-cover" />
      </div>
    </section>
  );
};

export default CaseStudyBanner;
