import React from 'react';
import type { FC } from 'react';

export interface PageBannerSectionProps {
  title: string;
  desc?: string;
}

const PageBannerSection: FC<PageBannerSectionProps> = (props) => {
  const { title, desc } = props;

  return (
    <section id="home" className="page-banner-section min-h-[50vh] flex items-center">
      <div className="items-center container flex w-full justify-center">
        <div className=" w-full md:w-2/3 lg:w-1/3 flex flex-col justify-center items-center">
          <h1 className="text-4xl dark:text-white">{title}</h1>
          {desc && <p className="text-2xl">{desc}</p>}
        </div>
      </div>
    </section>
  );
};

export default PageBannerSection;
