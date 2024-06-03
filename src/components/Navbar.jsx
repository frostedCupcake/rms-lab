"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
  const hiddenClass = "hidden w-full md:block md:w-auto";
  const normalClass = "w-full md:block md:w-[100vw]";
  const [hidden, setHidden] = useState(true);
  const router = useRouter();

  return (
    <div>
      {/* <div className="absolute w-[50%] inset-0 gradient-01 hidden md:block" /> */}
      <div
        className={`mx-auto w-full absolute top-0 flex justify-end md:justify-center flex-wrap  items-center gap-8 `}
      >
        <Link href="/" className="flex items-center">
          <img
            src="https://www.iitg.ac.in/design/upload/images/Projects/IITH_logo/IIT%20Hyderabad%20Logo_Final%20Design.jpg"
            alt="Murl Lab logo"
            className="h-14"
          />
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={() => {
            setHidden((prev) => !prev);
          }}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        <div className={hidden ? hiddenClass : normalClass} id="navbar-default">
          <ul className="flex flex-col w-full p-4 mt-4 rounded-lg md:flex-row md:space-x-20 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-murl-black uppercase transition-all">
            <li>
              <Link
                href="/"
                className={
                  router.pathname === "/"
                    ? "block font-bold py-2 pr-4 md:text-[1.2rem] pl-3 text-white/90 bg-[#F5A158] rounded md:bg-transparent  md:text-[#F5A158] md:p-0  transition-all"
                    : "block font-bold py-2 pr-4  md:text-[1.2rem] pl-3 text-white/90 rounded hover:text-[#F5A158] md:hover:bg-transparent md:border-0 md:hover:text-[#F5A158] md:p-0  transition-all"
                }
                aria-current="page"
                onClick={() => {
                  setHidden((prev) => !prev);
                }}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/team"
                className={
                  router.pathname === "/team"
                    ? "block font-bold py-2 pr-4  md:text-[1.2rem] pl-3 text-white/90 bg-[#F5A158] rounded md:bg-transparent  md:text-[#F5A158] md:p-0  transition-all"
                    : "block font-bold py-2 pr-4  md:text-[1.2rem] pl-3 text-white/90 rounded hover:text-[#F5A158] md:hover:bg-transparent md:border-0 md:hover:text-[#F5A158] md:p-0  transition-all"
                }
                onClick={() => {
                  setHidden((prev) => !prev);
                }}
              >
                People
              </Link>
            </li>
            <li>
              <Link
                href="/research/"
                className={
                  router.pathname === "/research"
                    ? "block font-bold py-2 pr-4  md:text-[1.2rem] pl-3 text-white/90 bg-[#F5A158] rounded md:bg-transparent  md:text-[#F5A158] md:p-0  transition-all"
                    : "block font-bold py-2 pr-4  md:text-[1.2rem] pl-3 text-white/90 rounded hover:text-[#F5A158] md:hover:bg-transparent md:border-0 md:hover:text-[#F5A158] md:p-0  transition-all"
                }
                onClick={() => {
                  setHidden((prev) => !prev);
                }}
              >
                LAB
              </Link>
            </li>
            <li>
              <Link
                href="/publications"
                className={
                  router.pathname === "/publications"
                    ? "block font-bold py-2 pr-4  md:text-[1.2rem] pl-3 text-white/90 bg-[#F5A158] rounded md:bg-transparent  md:text-[#F5A158] md:p-0  transition-all"
                    : "block font-bold py-2 pr-4  md:text-[1.2rem] pl-3 text-white/90 rounded hover:text-[#F5A158] md:hover:bg-transparent md:border-0 md:hover:text-[#F5A158] md:p-0  transition-all"
                }
                onClick={() => {
                  setHidden((prev) => !prev);
                }}
              >
                Publications
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={
                  router.pathname === "/contact"
                    ? "block font-bold py-2 pr-4  md:text-[1.2rem] pl-3 text-white/90 bg-[#F5A158] rounded md:bg-transparent  md:text-[#F5A158] md:p-0  transition-all"
                    : "block font-bold py-2 pr-4  md:text-[1.2rem] pl-3 text-white/90 rounded hover:text-[#F5A158] md:hover:bg-transparent md:border-0 md:hover:text-[#F5A158] md:p-0  transition-all"
                }
                onClick={() => {
                  setHidden((prev) => !prev);
                }}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
