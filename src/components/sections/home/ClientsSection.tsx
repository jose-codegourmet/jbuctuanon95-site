import Link from 'next/link';
import React from 'react';
import type { FC } from 'react';
import AnimationStateTrigger from 'src/components/common/AnimationStateTrigger';
import ImageComponent from 'src/components/common/ImageComponent';
import { CLIENTS } from 'src/constants/copies';
import type { ProjectStateTypes } from 'src/types/project';

export type ClientSectionProps = ProjectStateTypes;

const ClientSection: FC<ClientSectionProps> = (props) => {
  const { isDarkMode } = props;

  return (
    <section id="clients" className="clients-section flex h-screen items-center justify-center py-10">
      <div className="container flex w-full flex-wrap items-start">
        <AnimationStateTrigger animation="hidden" />
        <div className="mb-4 w-full lg:mb-0 lg:w-1/3">
          <h1 className="text-center text-2xl sm:text-left lg:text-4xl">Clients I work with</h1>
          <p className="text-base lg:text-2xl">
            Over the past six years, I have gained valuable experience working with both small start-ups and large
            corporations, which have helped me grow and advance as a developer. I have learned to be adaptable and
            flexible, as well as how to work with limited resources and tight deadlines. I have also gained experience
            in more specialized areas and worked on larger, more complex projects. Both types of experiences have been
            valuable in helping me develop my skills as a developer.
          </p>
        </div>
        <div className="w-full px-8 lg:w-2/3">
          <div className=" grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-6">
            {[...CLIENTS].map((c, k) => (
              <div className="relative h-10 w-full lg:h-[100px]" key={k}>
                {c.src && c.darkModeSrc ? (
                  <ImageComponent
                    src={c.src}
                    darkModeSrc={c.darkModeSrc}
                    alt={c.alt}
                    url={c.url}
                    layout="fill"
                    className="object-contain"
                    isDarkMode={isDarkMode}
                  />
                ) : (
                  <Link href={c.url}>
                    <h4 className="text-center text-neutral-900 dark:text-white">{c.alt}</h4>
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientSection;
