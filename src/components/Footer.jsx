"use client";

import Link from "next/link";
import { socials } from "../constants";

const Footer = () => (
  <footer className={`bg-white text-black py-8 relative`}>
    {/* <div className="footer-gradient hidden md:block" /> */}
    <div className={` mx-auto flex flex-col  gap-8`}>
      <div className="flex flex-col ">
        {/* <div className="mb-[50px] h-[2px] bg-white opacity-10 " /> */}

        <div className="flex items-center md:justify-between flex-wrap gap-4 justify-center">
          <Link href="/" className="flex items-center">
            <img
              src="https://www.iitg.ac.in/design/upload/images/Projects/IITH_logo/IIT%20Hyderabad%20Logo_Final%20Design.jpg"
              alt="Murl Lab logo"
              className="h-14"
            />
          </Link>{" "}
          <p className="font-normal text-[14px]  opacity-90">
            Copyright © 2023 - 2025 RMS. All rights reserved.
          </p>
          <div className="flex gap-4">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={social.url}
                  alt={social.name}
                  className="w-[24px] h-[24px] object-contain cursor-pointer text-black"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
