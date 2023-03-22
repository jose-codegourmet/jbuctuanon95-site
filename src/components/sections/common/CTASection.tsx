import React from 'react';

const CTASection = () => {
  return (
    <section className="companies-section relative py-10 ">
      <div className="container flex h-auto min-h-screen w-full items-center">
        <div className="w-full lg:w-1/3">
          <h1 className="text-2xl lg:text-4xl">Let's connect</h1>
          <p className="text-lg lg:text-2xl">
            My mailbox is always open, even though I'm not seeking for any new possibilities right now. I will do my
            best to get back to you whether you have a question or are just looking to say hello!
          </p>
          <button className="button-primary">Leave a message</button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
