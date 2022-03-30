import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Hero = () => {
  return (
    <div className="  bg-[url(/eppbg.png)] bg-cover bg-center bg-no-repeat font-text text-center md:text-left ">
      <div className=" py-24 text-white px-4 md:px-12">
        <h1 className="text-3xl md:text-6xl  w-full md:w-3/5 py-4">
          First automated planning permit in Nigeria.
        </h1>
        <p className="font-text text-2xl py-6 w-full md:w-2/4 font-[300]">
          Apply for an e-planning permit and get approved in a few days without
          any hassle.
        </p>
        <button className="bg-primary px-8 py-4 text-2xl rounded-md text-white cursor-pointer hover:bg-primary2  transition ease-in flex mx-auto md:mx-1 items-center gap-2">
          <h1>Get Started</h1>
          <BsArrowRight size="32px" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
