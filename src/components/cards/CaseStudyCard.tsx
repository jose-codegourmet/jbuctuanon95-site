import type { ImageComponentProps } from '../common/ImageComponent';
import ImageComponent from '../common/ImageComponent';
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
  const { bannerProps, excerpt, title, slug, banner, roles, client, websiteLink } = props;

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
        <div className="border-t-solid flex w-full border-t-2 border-t-slate-100 text-sm">
          {client && (
            <div className="flex-inline mx-2">
              <span className="block">Client:</span>
              <span className="block">{client}</span>
            </div>
          )}
          {roles && (
            <div className="flex-inline border-t-solid mx-2 border-l-2 border-l-slate-100">
              <span className="block">Roles:</span>
              <span className="block">
                {roles.map((r, k) => (
                  <span key={k}>
                    <span>{r}</span>
                    {k !== roles.length - 1 ? ',' : ''}
                  </span>
                ))}
              </span>
            </div>
          )}
        </div>
        <Link href={`/case-studies/${slug}`}>Learn More</Link>
      </div>
    </div>
  );
};

export default CaseStudyCard;
