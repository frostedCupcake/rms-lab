import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const page = () => {
  return (
    <div>
      <Navbar />
      <div className="px-[2rem] md:p-4 bg-gray-50  mt-[4rem] p-2 md:px-[8rem]">
        <h1 className="text-2xl md:text-3xl text-center py-8 pb-4 font-bold ">
          Contact Us
        </h1>
        <h2 className="text-xl font-bold mt-4">Dr. Subha Narayan Rath</h2>
        <div className="text-[.9rem] md:text-[1rem]">
          <p>Office No : BM- 202</p>
          <p>Dept. of Biomedical Engineering</p>
          <p>Indian Institute of Technology Hyderabad</p>
          <p>Kandi, Sangareddy - 502284</p>
          <p>INDIA</p>
          <p>
            Email:{" "}
            <a href="mailto:subharath@bme.iith.ac.in" className="text-blue-600">
              subharath@bme.iith.ac.in
            </a>
          </p>
          <p>Tel : 91-40-2301 6103</p>
          <p>Fax : 91-40-23016032</p>
          <p className="italic">
            To meet personally, please make an email appointment:{" "}
            <a href="mailto:subharath@bme.iith.ac.in" className="text-blue-600">
              subharath@bme.iith.ac.in
            </a>
          </p>
          <h2 className="text-xl font-bold mt-4 capitalize">
            FOR FUTURE STUDENTS
          </h2>
          <p className="text-[.9rem] md:text-[1rem]">
            We seek highly enthusiastic and motivated students to work in this
            lab. The students should have one of the following speciality
            degrees: Biotechnology, Material Science, Chemical engineering,
            Mechanical engineering, Life Sciences, and not in that order. Find
            my google scholar citation works{" "}
            <a href="" className="text-blue-600">
              here
            </a>{" "}
            and plan for future works in which you are likely to contribute.
            Kindly apply for PhD interviews at two times every year in this{" "}
            <a
              href="https://www.iith.ac.in/phdadmissions/"
              className="text-blue-600"
            >
              link
            </a>
            .
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
