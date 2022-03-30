import React from "react";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";
import Navbar from "./components/Navbar";

const Signin = () => {
  return (
    <>
      <Navbar />

      <div className=' min-h-screen bg-[url("/regpage.png")] bg-center bg-cover text-white font-text px-16 py-12'>
        <div>
          <h1 className="text-5xl pb-4">Create an account</h1>
          <p className="text-2xl">
            Don&rsquo;t have an account?
            <span className="text-primary"> Create an account instead.</span>
          </p>
        </div>
        <section className="w-full md:w-1/2">
          <form className="mt-8">
            <div className="flex flex-col mb-8">
              <label
                className="mb-1 capitalize font-bold text-lg"
                htmlFor="first_name"
              >
                E-mail address
              </label>
              <input
                className="border text-lg py-2 px-4 text-fff rounded-md bg-transparent md:mr-2"
                type="email"
                autoComplete="off"
                name="email"
                placeholder="Enter your e-mail address"
              />
            </div>

            <div className="flex flex-col mb-8">
              <label
                className="mb-1 capitalize font-bold text-lg"
                htmlFor="first_name"
              >
                Password
              </label>
              <input
                className="border text-lg py-2 px-4 text-fff rounded-md bg-transparent md:mr-2"
                type="password"
                autoComplete="off"
                name="email"
                placeholder="Enter your password"
              />
            </div>

            <button className="w-full bg-primary px-3 py-2 text-lg rounded-md text-white cursor-pointer hover:bg-primary2 transition ease-in">
              Send
            </button>
          </form>
        </section>
      </div>
    </>
  );
};

export default Signin;
