import React from "react";
import TeamCard from "../../components/TeamCard";
import {
  current_students_phd,
  current_students_masters,
  alums_phd,
  alums_masters,
  PI,
} from "../../constants";
import Head from "next/head";
import Navbar from "@/components/Navbar";

const page = () => {
  return (
    <>
      <Head>
        <title>Team</title>
      </Head>
      <Navbar />
      <section className="relative z-10">
        <div>
          {/* Principal Investigator */}
          <div>
            <div className="mt-[10rem] font-thin xl:text-[40px] sm:text-[30px] text-[20px] uppercase text-black tracking-widest mb-[2rem] text-center">
              Principal Investigator
            </div>
            <TeamCard
              img={PI[0].ImgLink}
              name={PI[0].Name}
              Background={PI[0].Background}
            />
          </div>

          {/* Doctoral Fellows */}
          <div>
            <div className="font-thin xl:text-[40px] sm:text-[30px] text-[20px] uppercase text-black tracking-widest mb-[2rem] text-center">
              Doctoral Fellows
            </div>
            <div className="grid grid-cols-1">
              {current_students_phd.map((item, i) => (
                <TeamCard
                  img={item.ImgLink}
                  name={item.Name}
                  Background={item.Background || "Ph.D Fellow"}
                  email={item.email}
                  key={i}
                />
              ))}
            </div>
          </div>

          {/* Masters Students */}
          <div>
            <div className="font-thin xl:text-[40px] sm:text-[30px] text-[20px] uppercase text-black tracking-widest mb-[2rem] text-center">
              Masters Students
            </div>
            {current_students_masters.map((item, i) => (
              <TeamCard
                img={item.ImgLink}
                name={item.Name}
                Background={item.Background || "Masters Student"}
                email={item.email}
                key={i}
              />
            ))}
          </div>

          {/* Alumni: Post Doctoral Researchers */}
          <div>
            <div className="font-thin xl:text-[40px] sm:text-[30px] text-[20px] uppercase text-black tracking-widest mb-[2rem] text-center">
              Alumni
              <span className="font-thin text-xl block mt-3">
                Post Doctoral Researchers
              </span>
            </div>
            <div className="grid grid-cols-2">
              {alums_phd.map((item, i) => (
                <div
                  className="flex flex-col gap-2 text-black justify-center items-center my-4"
                  key={i}
                >
                  <img
                    src={item.ImgLink}
                    alt={item.Name}
                    className="w-[16rem] h-[16rem] rounded-md shadow-lg"
                  />
                  <div className="font-bold">{item.Name}</div>
                  <div>{item.Background[0]}</div>
                </div>
              ))}
            </div>

            {/* Alumni: Masters Students */}
            <span className="font-thin text-xl block uppercase mt-10 text-black tracking-widest mb-[2rem] text-center">
              Masters Students
            </span>
            <div className="grid grid-cols-2 md:flex-row gap-10 justify-center">
              {alums_masters.map((item, i) => (
                <div
                  className="flex flex-col gap-2 text-black justify-center items-center my-4"
                  key={i}
                >
                  <img
                    src={item.ImgLink}
                    alt={item.Name}
                    className="w-[16rem] h-[16rem] rounded-md shadow-lg"
                  />
                  <div className="font-bold">{item.Name}</div>
                  <div>{item.Background[0]}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
