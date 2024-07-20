import React from "react";

const About = () => {
  return (
    <div className="flex mt-10 flex-col gap-5 sm:items-start justify-center md:px-10 py-10">
      {/* <div className="hidden md:block absolute w-[50%] bottom-0 gradient-04" /> */}

      <h2 className="text-black text-3xl font-medium underline">About RMS Lab</h2>
      <p className="text-[1rem] text-left md:text-xl text-black tracking-wide">
        In Regenerative Medicine and Stem cell (RMS) Lab, we work with
        mesenchymal stem cells and cancer derived stem cells; and try to
        understand their interaction and differentiation potential with respect
        to chemical forces from Biomaterials and mechanical forces from
        Bioreactors. We use 3D bio-printing to understand the mechanisms of
        regenrative potential and in vitro disease models for osteochondral
        tissues and angiogenic tissues. The ultimate aim of this lab to find the
        application of our research by using bioengineering strategies.
      </p>
    </div>
  );
};

export default About;
