import React from "react";
import { FaBars } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";
import Link from "next/link";
import Navbar from "./components/Navbar";

const Register = () => {
  return (
    <>
      <Navbar />
      <div className=' bg-[url("/regpage.png")] bg-center bg-cover text-white font-text px-16 py-12'>
        <div>
          <h1 className="text-5xl pb-4">Create an account</h1>
          <p className="text-2xl">
            Already have an account?<span> Log in instead</span>
          </p>
        </div>
        <section className="w-full md:w-3/5">
          <form className="mt-8">
            <div className="flex flex-col mb-4">
              <label
                className="mb-1 capitalize font-bold text-lg"
                htmlFor="first_name"
              >
                Full name
              </label>
              <input
                className="border text-lg py-2 px-4 text-fff rounded-md bg-transparent md:mr-2"
                type="text"
                autoComplete="off"
                name="email"
                placeholder="Enter your company name or your full name"
              />
            </div>
            <article className="flex gap-12 md:flex-row flex-col">
              <div className="flex flex-col mb-4">
                <label
                  className="mb-1 capitalize font-bold text-lg"
                  htmlFor="first_name"
                >
                  Identity
                </label>
                <input
                  className="border text-lg py-4 px-8 text-fff rounded-md bg-transparent md:mr-2"
                  type="text"
                  autoComplete="off"
                  name="email"
                  placeholder="Male, female or corporate?"
                />
              </div>
              <div className="flex flex-col mb-4 ">
                <label
                  className="mb-1 capitalize font-bold text-lg"
                  htmlFor="first_name"
                >
                  Phone number
                </label>
                <input
                  className="border text-lg py-4 px-8 text-fff rounded-md bg-transparent md:mr-2"
                  type="text"
                  autoComplete="off"
                  name="email"
                  placeholder="Enter your phone number"
                />
              </div>
            </article>
            <div className="flex flex-col mb-4">
              <label
                className="mb-1 capitalize font-bold text-lg"
                htmlFor="first_name"
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
            <article className="flex gap-12 md:flex-row flex-col">
              <div className="flex flex-col mb-4">
                <label
                  className="mb-1 capitalize font-bold text-lg"
                  htmlFor="first_name"
                >
                  Password
                </label>
                <input
                  className="border text-lg py-4 px-8 text-fff rounded-md bg-transparent md:mr-2"
                  type="text"
                  autoComplete="off"
                  name="email"
                  placeholder="Enter a suitable password"
                />
              </div>
              <div className="flex flex-col mb-4 ">
                <label
                  className="mb-1 capitalize font-bold text-lg"
                  htmlFor="first_name"
                >
                  Confirm password
                </label>
                <input
                  className="border text-lg py-4 px-8 text-fff rounded-md bg-transparent md:mr-2"
                  type="text"
                  autoComplete="off"
                  name="email"
                  placeholder="Confirm your password"
                />
              </div>
            </article>
            <button className="w-full bg-primary px-3 py-2 text-lg rounded-md text-white cursor-pointer hover:bg-primary2 transition ease-in">
              Send
            </button>
          </form>
        </section>
      </div>
    </>
  );
};

export default Register;
