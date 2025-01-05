import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import { courses } from "@/constants";

const Teaching = () => {
  return (
    <div>
      <Navbar />
      <div className="md:p-4 p-2 bg-gray-50  mt-[4rem] md:mt-[8rem] md:px-[8rem]">
        <h1 className="text-2xl md:text-3xl text-center py-8 pb-4 font-bold">
          Teaching by RMS Lab
        </h1>
        <div className="grid lg:grid-cols-2 gap-5">
          {courses.map((course, index) => (
            <div key={index} className="mb-4 shadow-md p-5 rounded-lg">
              <h2 className="text-xl font-semibold">
                {course.code} Credits: {course.credits} {course.title}
              </h2>
              <p>
                <strong>SYLLABUS</strong>
              </p>
              <ul className="list-disc list-inside">
                {course.syllabus.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              <p className="italic mt-2">{course.description}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Teaching;
