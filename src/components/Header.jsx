"use client";
import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div>
      <div
        className="min-h-screen bg-cover bg-center relative"
        style={{
          backgroundImage: "url(/assets/rms-header.png)",
        }}
      ></div>
      <div className="flex text-[4rem] flex-col absolute top-0 left-0 px-20 w-full gradient-overlay  items-start justify-center min-h-screen "></div>
    </div>
  );
};

export default Header;
