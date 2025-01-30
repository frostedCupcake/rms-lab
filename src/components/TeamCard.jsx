import Link from "next/link";
import React from "react";
import {
  AiFillLinkedin,
  AiOutlineLinkedin,
  AiOutlineMail,
} from "react-icons/ai";

const TeamCard = ({
  img,
  name,
  Background = ["", ""],
  email,
  expertise = "",
}) => (
  <div className="flex md:flex-row flex-col md:gap-2 lg:gap-1 gap-5 my-5 z-100 items-center justify-center w-[20rem] md:w-[50rem] lg:w-[60rem] text-left mx-auto">
    <div className="flex flex-col gap-3 w-full justify-center items-center">
      <img
        src={img}
        alt={name}
        className=" w-[16rem] h-[16rem]  rounded-md shadow-lg"
      />
      <div
        className="flex flex-row gap-10 items-center text-white text-base md:text-[1.2rem] 
      lg:text-[1.7rem] font-bold "
      >
        <Link legacyBehavior href={`mailto:${email}`}>
          <a>
            <AiOutlineMail />
          </a>
        </Link>
      </div>
    </div>
    <div className="flex flex-col gap-3 w-[100%]">
      <h3>
        <span className="font-bold">{name}</span>
      </h3>
      <h4>
        {Background &&
          Background.map((item) => (
            <span className="font-bold block">{item}</span>
          ))}
        {/* {', '} */}
      </h4>
      {expertise !== "" ? (
        <h4>
          <span className="font-bold">Expertise: </span> {expertise}
        </h4>
      ) : (
        ""
      )}
    </div>
  </div>
);

export default TeamCard;
