import React from "react";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";

const Navbar = () => {
  return (
    <>
      <section className="font-text px-8 py-4">
        <nav className="border-b-2 pb-4 flex items-center justify-between">
          <Link href="/">
            <a>
              <img src="/epp.png" alt="website-logo" />
            </a>
          </Link>
          <div className="hidden md:block">
            <Link href="/signin">
              <a>
                <button className="border-primary border-2 text-lg rounded-md text-primary px-4 py-[2px] cursor-pointer">
                  Sign In
                </button>
              </a>
            </Link>

            <Link href="/register">
              <a>
                <button className="ml-4 bg-primary px-3 py-1 text-lg rounded-md text-white cursor-pointer hover:bg-primary2 transition ease-in">
                  Register an account
                </button>
              </a>
            </Link>
          </div>
          <div className="block md:hidden">
            <FaBars size="32px" />
          </div>
        </nav>
        <div className="grid py-4">
          <ul className=" hidden md:flex justify-between items-center gap-12 justify-self-end text-lg">
            <li>Home</li>
            <li className="flex items-center gap-1">
              Ministry <IoIosArrowUp />
            </li>{" "}
            <li className="flex items-center gap-1">
              Departments <IoIosArrowUp />
            </li>
            <li className="flex items-center gap-1">
              Permits <IoIosArrowUp />
            </li>
            <li className="flex items-center gap-1">
              Guidance <IoIosArrowUp />
            </li>
            <li>Services</li>
            <li>Contact us</li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Navbar;
