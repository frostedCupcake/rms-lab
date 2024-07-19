"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed top-0 left-0 right-0 lg:px-20 z-[1000] bg-white bg-opacity-80">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center space-x-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/1/19/IIT_Hyderabad_Insignia.svg/1200px-IIT_Hyderabad_Insignia.svg.png"
            alt="IITH Logo"
            className="h-16 sm:h-20"
          />
          <div className="text-black text-[1rem] sm:text-2xl">
            <h1 className="font-medium">IIT Hyderabad</h1>
            <p className="text-sm sm:text-base">
              Department of Biomedical Engineering
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleDrawer}
            className="text-black focus:outline-none menu"
          >
            {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
          </button>
        </div>
      </div>

      <div
        className={`fixed top-0 left-0 h-full w-[16rem] sm:w-[25rem] bg-white text-black uppercase text-[1.1rem] sm:text-2xl transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <nav className="flex flex-col p-4 gap-5 mt-5">
          <Link
            href="/"
            className="py-2 px-4 hover:bg-gray-500 border-b-black/20 border-b hover:text-white transition-all"
          >
            Home
          </Link>
          <Link
            href="/research-and-lab"
            className="py-2 px-4 hover:bg-gray-500 border-b-black/20 border-b hover:text-white transition-all"
          >
            Research & Lab
          </Link>
          <Link
            href="/team"
            className="py-2 px-4 hover:bg-gray-500 border-b-black/20 border-b hover:text-white transition-all"
          >
            Team
          </Link>
          <Link
            href="/teaching"
            className="py-2 px-4 hover:bg-gray-500 border-b-black/20 border-b hover:text-white transition-all"
          >
            Teaching
          </Link>
          <Link
            href="/publications"
            className="py-2 px-4 hover:bg-gray-500 border-b-black/20 border-b hover:text-white transition-all"
          >
            Publications
          </Link>
          <Link
            href="/faq"
            className="py-2 px-4 hover:bg-gray-500 border-b-black/20 border-b hover:text-white transition-all"
          >
            FAQ
          </Link>
          <Link
            href="/contact-us"
            className="py-2 px-4 hover:bg-gray-500 border-b-black/20 border-b hover:text-white transition-all"
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
