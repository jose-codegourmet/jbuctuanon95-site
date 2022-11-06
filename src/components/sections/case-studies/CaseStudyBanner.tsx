import Link from 'next/link';
import React from 'react';
import type { FC } from 'react';
import { Parallax } from 'react-scroll-parallax';
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
      <div className="container py-[10rem] flex justify-between items-end">
        <div className="sm:w-1/3 w-full flex flex-col">
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
          <div className="w-full sm:w-1/3 flex flex-col">
            <h2 className="text-2xl">Overview</h2>
            <RichText content={overview.json} />
          </div>
        )}
      </div>
      <div className="h-[600px] container w-full relative">
        <Parallax speed={50} className="w-full absolute top-[-100px] left-0 h-full ">
          <ImageComponent src={url} layout="fill" className="object-cover" />
        </Parallax>
      </div>
    </section>
  );
};

export default CaseStudyBanner;
