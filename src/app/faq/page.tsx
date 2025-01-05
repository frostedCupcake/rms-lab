import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import { faqs } from "@/constants";

const page = () => {
  return (
    <div>
      <Navbar />
      <div className="md:p-4 p-2 bg-gray-50  mt-[4rem] md:mt-[8rem] md:px-[8rem]">
        <h1 className="text-2xl md:text-3xl text-center py-8 pb-4 font-bold">
          Frequently Asked Questions (FAQ)
        </h1>
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mt-4"
          >
            <input type="checkbox" />
            <div className="collapse-title text-sm md:text-xl font-medium">
              {faq.question}
            </div>
            <div className="collapse-content text-sm md:text-md">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}

        <Footer />
      </div>
      {/* <p className='italic mx-5'>If you have any suggestions for this FAQ section, kindly send an email to subharath+rms@bme.iith.ac.in</p> */}
    </div>
  );
};

export default page;
