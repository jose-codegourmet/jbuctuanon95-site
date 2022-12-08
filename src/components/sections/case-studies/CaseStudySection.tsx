import cn from 'classnames';
import Link from 'next/link';
import React from 'react';
import type { FC } from 'react';
import type { ImageComponentProps } from 'src/components/common/ImageComponent';
import ImageComponent from 'src/components/common/ImageComponent';
import Pills from 'src/components/common/Pills';
import RichText from 'src/components/common/RichText';
import type { CASE_STUDY_RESULTS_FIELDS_TYPE } from 'src/lib/caseStudy/types';
import type { ProjectStateTypes } from 'src/types/project';

export interface CaseStudySectionProps extends ProjectStateTypes, CASE_STUDY_RESULTS_FIELDS_TYPE {
  bannerProps?: Omit<ImageComponentProps, 'src'> & {
    src?: string;
  };
  isMediaLeft: boolean;
}

const CaseStudySection: FC<CaseStudySectionProps> = (props) => {
  const { isMediaLeft, bannerProps, excerpt, title, slug, banner, techStack, roles, dateCreated, client, websiteLink } =
    props;

  const renderMedia = () => (
    <div className="case-study-section__media ">
      <ImageComponent layout="fill" src={banner.url} alt={banner.title} {...bannerProps} />
      <div className="case-study-section__media__overlay">
        <Link passHref href={websiteLink}>
          <a className="button button-outline-to-fill w-full" target="_blank">
            Visit Website
          </a>
        </Link>
      </div>
    </div>
  );

  return (
    <section
      id={slug}
      className={cn('case-study-section', {
        'case-study-section--is-media-left': isMediaLeft,
      })}
    >
      <div className="case-study-section__container">
        <div
          className={cn('case-study-section__row', {
            'sm:ml-[10%] sm:mr-0 ml-0': !isMediaLeft,
            'sm:mr-[10%] sm:ml-0 mr-0': isMediaLeft,
          })}
        >
          {isMediaLeft && renderMedia()}
          <div className="case-study-section__info">
            {title && (
              <Link passHref href={`/case-studies/${slug}`}>
                <a className="w-full">
                  <h3 className="my-0 text-2xl">{title}</h3>
                </a>
              </Link>
            )}
            {excerpt && <RichText content={excerpt.json} />}
            {dateCreated && (
              <p className="text-base my-0">
                <span className="mr-[1ch] ">Project Date:</span> {dateCreated}
              </p>
            )}
            {client && (
              <p className="text-base my-0">
                <span className="mr-[1ch] ">Client:</span>
                {client}
              </p>
            )}
            {roles && (
              <div className="w-full flex align-middle my-0">
                <p className="text-base">
                  <span className="mr-[1ch]">Roles:</span>
                  {roles.map((r, k) => (
                    <>
                      <span key={k}>{r}</span>
                      {k !== roles.length - 1 ? ',' : ''}
                    </>
                  ))}
                </p>
              </div>
            )}
            {techStack && (
              <div className="w-full flex align-middle flex-wrap">
                <span className="text-base whitespace-nowrap mt-2 mr-2">Tech Stack: </span>
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
          {!isMediaLeft && renderMedia()}
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;
