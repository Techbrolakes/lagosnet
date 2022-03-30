import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Details = ({ image, head, text }) => {
  return (
    <div className="text-tertiary px-8 text-center flex flex-col items-center justify-center gap-4">
      <img src={image} alt="icon" />
      <h1 className="text-9xl">{head}</h1>
      <p className="text-2xl">{text}</p>
    </div>
  );
};

const Register = () => {
  return (
    <div className='bg-[url("/register.png")] bg-center bg-cover py-36 flex flex-col items-center justify-center text-body gap-4'>
      <h1 className="text-4xl md:text-6xl font-semibold">
        Register now! It&rsquo;s free.
      </h1>
      <p className="text-lg md:text-[28px] text-center font-extralight w-full md:w-3/5">
        Register in seconds and start applying for your planning permit. We will
        update you every step of the way.
      </p>
      <button className="bg-primary px-4 py-2 text-xl rounded-md text-white cursor-pointer hover:bg-primary2 transition ease-in flex items-center gap-2">
        Get Started
        <BsArrowRight size="32px" />
      </button>
    </div>
  );
};

const Brands = () => {
  return (
    <>
      <div className='bg-[url("/brands.png")] py-12 mt-36 font-text'>
        <h1 className="text-2xl md:text-4xl text-center text-body py-4 px-2 font-medium w-full md:w-4/5 mx-auto subpixel-antialiased">
          We are proudly supported by The Lagos State Government, World Bank and
          Eco Bank Nigeria Plc.
        </h1>
        <div className="flex flex-col md:flex-row justify-center">
          <img src="/lagos.png" alt="lagos" />
          <img src="/net.png" alt="lnet" />
          <img src="/ecobank.png" alt="ecobank" />
        </div>
      </div>

      <div className="mt-36 flex flex-col md:flex-row justify-center gap-12">
        <Details image="/icon.png" head="1283" text="Registered users" />
        <Details image="/icon2.png" head="30" text="Area Districts" />
        <Details image="/icon3.png" head="8677" text="Screening applications" />
      </div>

      <div className="mt-36">
        <Register />
      </div>
    </>
  );
};

export default Brands;
