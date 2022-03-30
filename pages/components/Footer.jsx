import React from "react";
import { FaLinkedin, FaFacebookSquare, FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="bg-secondary px-12  text-white pt-16">
      <div className=" flex flex-col md:flex-row justify-center gap-[15%]  font-text pb-12 border-b-2">
        <div>
          <h1 className=" text-4xl md:text-5xl font-bold text-center md:text-left ">
            Get in touch
          </h1>
          <p className=" text-base text-center md:text-left py-2 md:text-lg">
            Send us a message and we will get back to you shortly.
          </p>
          <form className="mt-8">
            <div class="flex flex-col mb-4">
              <label
                className="mb-1 capitalize font-bold text-lg"
                for="first_name"
              >
                E-mail address
              </label>
              <input
                className="border text-lg py-2 px-4 text-fff rounded-md bg-transparent md:mr-2"
                type="text"
                autoComplete="off"
                name="email"
                placeholder="Enter your e-mail address"
              />
            </div>
            <div class="flex flex-col mb-4 ">
              <label
                className="mb-1 capitalize font-bold text-lg"
                for="first_name"
              >
                Message
              </label>
              <textarea
                className="border text-lg py-6 px-4 text-fff rounded-md bg-transparent md:mr-2"
                type="text"
                autoComplete="off"
                name="email"
                placeholder="Type your message"
              />
            </div>
            <button className="w-full bg-primary px-3 py-1 text-lg rounded-md text-white cursor-pointer hover:bg-primary2 transition ease-in">
              Send
            </button>
          </form>
        </div>

        <div className="w-full py-12 text-center md:text-left md:py-0 md:w-1/3">
          <h1 className="text-5xl pb-4 font-bold">Contact us.</h1>
          <article className="text-lg">
            <p>
              Address: Head Office - Along Laspppa Road Off Oba Akinjobi Road,
              Ikeja Old Secretariat, Ikeja - State, Nigeria.
            </p>
            <p className="py-4">Phone: 09082233117, 09082233118</p>
            <p>Email: info@lagossepp.com</p>
          </article>
          <div className="flex text-center justify-center md:justify-start gap-4 py-4">
            <FaFacebookSquare size="32px" />
            <FaLinkedin size="32px" />
            <FaTwitterSquare size="32px" />
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-4 pt-8 pb-4">
        <img src="/epp.png" alt="logo" />
        <h1 className=" text-lg md:text-2xl">
          Copyright 2022. All Rights Reserved.
        </h1>
      </div>
    </section>
  );
};

export default Footer;
