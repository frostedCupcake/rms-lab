import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Equipments from "../../components/Equipments";
import React from "react";
import { researchInterests } from "@/constants";

const RMSLabPage = () => {
  return (
    <div className="flex  flex-col relative gap-5">
      <Navbar />
      <div className="px-10 mb-5 bg-gray-50 mt-[8rem]">
        <Equipments />
        <h3 className="text-black mt-10 text-2xl flex items-center justify-center font-medium underline">
          Current Research Interests of Our Lab:
        </h3>
        <section className="space-y-10 mt-5 mx-auto text-left max-w-[40rem]">
          {researchInterests.map((interest, index) => (
            <div key={index} className="space-y-5">
              <h4 className="text-xl font-semibold text-center text-gray-900">
                {interest.title}
              </h4>

              <ul className="list-disc pl-5 text-base md:text-lg text-gray-800 leading-relaxed">
                {interest.points.map((point, idx) => (
                  <li key={idx} className="mb-2">
                    {point}
                  </li>
                ))}
              </ul>

              {/* Image and Caption (Optional) */}
              {/* {interest.image && (
                <div className="w-[30rem] flex flex-col gap-5 justify-center items-center mx-auto">
                  <img
                    src={interest.image.src}
                    alt={interest.image.alt}
                    className="w-full rounded-lg shadow-md"
                  />
                  <p className="italic text-sm text-gray-600 mt-2 text-center">
                    {interest.image.caption}
                  </p>
                </div>
              )} */}
            </div>
          ))}
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default RMSLabPage;
