import React from 'react';
import type { FC } from 'react';

export interface PageBannerSectionProps {
  title: string;
  desc?: string;
}

const PageBannerSection: FC<PageBannerSectionProps> = (props) => {
  const { title, desc } = props;

  return (
    <section id="home" className="page-banner-section flex min-h-[50vh] items-center">
      <div className="container flex w-full items-center justify-center">
        <div className=" flex w-full flex-col items-center justify-center md:w-2/3 lg:w-1/3">
          <h1 className="text-4xl dark:text-white">{title}</h1>
          {desc && <p className="text-2xl">{desc}</p>}
        </div>
      </div>
    </section>
  );
};

export default PageBannerSection;
