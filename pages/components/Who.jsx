import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Who = () => {
  return (
    <div className="mt-36 px-2 md:px-16 flex flex-col md:flex-row justify-center font-text">
      <article>
        <h1 className="text-4xl text-center md:text-left md:text-6xl font-bold pb-4">
          Who are we
        </h1>
        <p className="text-lg md:text-[28px]">
          We are a conflagaration of multiple departments under the Ministry for
          Physical Planning and Urban Development consisting of:
        </p>
        <ul className="list-disc text-lg md:text-2xl px-8 py-4">
          <li>LASPPPA - Lagos State Physical Planning Permit Authority</li>
          <li> LASBCA - Lagos State Building Control Agency</li>
          <li> LASPIC - Lagos State Planning Information Centre etc</li>
        </ul>
        <button className=" text-primary text-2xl py-4 rounded-md  cursor-pointer justify-center md:justify-start  flex items-center gap-2">
          <p>Learn More</p>
          <div>
            <BsArrowRight size="32px" />
          </div>
        </button>
      </article>
      <article>
        <img src="whoo.png" alt="image" />
      </article>
    </div>
  );
};

export default Who;
