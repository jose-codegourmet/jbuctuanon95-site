import type { ImageComponentProps } from '../common/ImageComponent';
import ImageComponent from '../common/ImageComponent';
import Pills from '../common/Pills';
import RichText from '../common/RichText';
import Link from 'next/link';
import React from 'react';
import type { FC } from 'react';
import type { CASE_STUDY_RESULTS_FIELDS_TYPE } from 'src/lib/caseStudy/types';
import type { ProjectStateTypes } from 'src/types/project';

export interface CaseStudyCardProps extends ProjectStateTypes, CASE_STUDY_RESULTS_FIELDS_TYPE {
  bannerProps?: Omit<ImageComponentProps, 'src'> & {
    src?: string;
  };
}

const CaseStudyCard: FC<CaseStudyCardProps> = (props) => {
  const { bannerProps, excerpt, title, slug, banner, techStack, roles, dateCreated, client, websiteLink } = props;

  return (
    <div className="card">
      <div className="card__media">
        <ImageComponent layout="fill" src={banner.url} alt={banner.title} {...bannerProps} />
        <div className="card__media__overlay">
          <Link passHref href={websiteLink}>
            <a className="button button-outline-to-fill w-full" target="_blank">
              Visit Website
            </a>
          </Link>
        </div>
      </div>
      <div className="card__info">
        {title && (
          <Link passHref href={`/case-studies/${slug}`}>
            <a className="w-full">
              <h3 className="my-0 text-2xl">{title}</h3>
            </a>
          </Link>
        )}
        {excerpt && <RichText content={excerpt.json} />}
        {dateCreated && (
          <p className="my-0 text-base">
            <span className="mr-[1ch] ">Project Date:</span> {dateCreated}
          </p>
        )}
        {client && (
          <p className="my-0 text-base">
            <span className="mr-[1ch] ">Client:</span>
            {client}
          </p>
        )}
        {roles && (
          <div className="my-0 flex w-full align-middle">
            <p className="text-base">
              <span className="mr-[1ch]">Roles:</span>
              {roles.map((r, k) => (
                <span key={k}>
                  <span>{r}</span>
                  {k !== roles.length - 1 ? ',' : ''}
                </span>
              ))}
            </p>
          </div>
        )}
        {techStack && (
          <div className="flex w-full flex-wrap align-middle">
            <span className="mt-2 mr-2 whitespace-nowrap text-base">Tech Stack: </span>
            <div className="-ml-2 mt-2">
              <Pills
                items={techStack.map((ts) => ({
                  label: ts,
                }))}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CaseStudyCard;
