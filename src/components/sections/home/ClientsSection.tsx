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
      <div className="container flex w-full items-start flex-wrap">
        <div className="w-full lg:w-1/3 mb-4 lg:mb-0">
          <h1 className="text-2xl lg:text-4xl text-center sm:text-left">Clients I work with</h1>
          <p className="text-base lg:text-2xl">
            After six years of practice. I've had the pleasure of working for both fantastic start-ups and significant
            corporations. Both of us have benefited from their assistance in helping me advance as a developer.
          </p>
        </div>
        <div className="w-full lg:w-2/3 px-8">
          <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">
            {[...CLIENTS].map((c, k) => (
              <div className="h-10 lg:h-[100px] relative w-full" key={k}>
                <ImageComponent
                  src={c.src}
                  darkModeSrc={c.darkModeSrc}
                  alt={c.alt}
                  url={c.url}
                  layout="fill"
                  className="object-contain"
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
