import React from 'react';
import type { FC } from 'react';
import ImageComponent from 'src/components/common/ImageComponent';
import { CLIENTS } from 'src/constants/copies';
import type { ProjectStateTypes } from 'src/types/project';

export type ClientSectionProps = ProjectStateTypes;

const ClientSection: FC<ClientSectionProps> = (props) => {
  const { isDarkMode } = props;

  return (
    <section id="clients" className="clients-section py-10">
      <div className="container flex w-full items-start">
        <div className="w-1/3">
          <h1 className="text-4xl">Organizations I've worked for</h1>
          <p className="text-2xl">
            After six years of practice. I've had the pleasure of working for both fantastic start-ups and significant
            corporations. Both of us have benefited from their assistance in helping me advance as a developer.
          </p>
        </div>
        <div className="w-2/3 px-8">
          <div className=" grid grid-cols-6 gap-10">
            {[...CLIENTS].map((c, k) => (
              <div className="h-[200px] relative w-full" key={k}>
                <ImageComponent
                  src={c.src}
                  darkModeSrc={c.darkModeSrc}
                  alt={c.alt}
                  url={c.url}
                  width="200"
                  height="60px"
                  isDarkMode={isDarkMode}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientSection;
