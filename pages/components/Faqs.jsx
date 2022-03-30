import React from "react";
import { HiOutlinePlusSm } from "react-icons/hi";

const Faq = () => {
  return (
    <div className="font-text pb-4 ">
      <div className="flex border-b-2 border-black pb-4 w-full md:w-5/6">
        <article>
          <h1 className="text-3xl md:text-4xl font-bold">
            What is a planning permit?
          </h1>
          <p className="w-full md:w-4/5 text-2xl py-4">
            A planning permit is a legal document that gives permission for a
            use or development on a particular piece of land.
          </p>
        </article>
        <div>
          <HiOutlinePlusSm size="32px" />
        </div>
      </div>
    </div>
  );
};

const Faqs = () => {
  return (
    <div className="mt-36 px-4 md:px-12">
      <h1 className="text-7xl pb-8">FAQS</h1>
      <Faq />
      <Faq />
      <Faq />
      <Faq />
      <Faq />
    </div>
  );
};

export default Faqs;
