import Link from 'next/link';
import React from 'react';
import type { FC } from 'react';
import { useInView } from 'react-intersection-observer';
import { useDispatch } from 'react-redux';
import ImageComponent from 'src/components/common/ImageComponent';
import { CLIENTS } from 'src/constants/copies';
import { updateAnimationState } from 'src/redux/reducers/project';
import type { ProjectStateTypes } from 'src/types/project';

export type ClientSectionProps = ProjectStateTypes;

const ClientSection: FC<ClientSectionProps> = (props) => {
  const { isDarkMode } = props;
  const { ref, inView } = useInView();
  const dispatch = useDispatch();

  if (inView) {
    dispatch(updateAnimationState('hidden'));
  }

  return (
    <section id="clients" className="clients-section py-10" ref={ref}>
      <div className="container flex w-full flex-wrap items-start">
        <div className="mb-4 w-full lg:mb-0 lg:w-1/3">
          <h1 className="text-center text-2xl sm:text-left lg:text-4xl">Clients I work with</h1>
          <p className="text-base lg:text-2xl">
            After six years of practice. I've had the pleasure of working for both fantastic start-ups and significant
            corporations. Both of us have benefited from their assistance in helping me advance as a developer.
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
