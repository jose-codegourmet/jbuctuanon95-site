import Link from 'next/link';
import React from 'react';
import type { FC } from 'react';
import AnimationStateTrigger from 'src/components/common/AnimationStateTrigger';
import { CLIENTS } from 'src/constants/clients';

const ClientSection: FC = () => {
  return (
    <section
      id="clients"
      className="clients-section flex h-auto min-h-screen flex-col items-center justify-center py-10"
    >
      <div className="container flex w-full flex-wrap items-start justify-center">
        <AnimationStateTrigger animation="hidden" />
        <div className="w-full text-center lg:w-3/4">
          <h1 className="text-2xl lg:text-4xl">Clients I work with</h1>
          <p className="text-base lg:text-2xl ">
            Over the past six years, I have gained valuable experience working with both small start-ups and large
            corporations, which have helped me grow and advance as a developer. I have learned to be adaptable and
            flexible, as well as how to work with limited resources and tight deadlines. I have also gained experience
            in more specialized areas and worked on larger, more complex projects. Both types of experiences have been
            valuable in helping me develop my skills as a developer.
          </p>
        </div>
      </div>
      <div className=" flex w-full flex-wrap items-start justify-center">
        {[...CLIENTS].map((c, k) => (
          <div className="relative inline-flex w-auto p-2" key={k}>
            <Link href={c.url}>
              <h4 className="my-0 text-center text-3xl leading-none text-neutral-900 dark:text-white">
                {c.alt}
                {CLIENTS.length - 1 > k && ','}
              </h4>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientSection;
