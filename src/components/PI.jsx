"use client";

import { motion } from "framer-motion";

import { staggerContainer, fadeIn, planetVariants } from "../utils/motion";

const PI = () => (
  <section
    className={`relative z-10 p-2 md:p-10 flex flex-col justify-center items-center md:items-start gap-5`}
  >
    <h2 className="text-black text-2xl md:text-3xl font-medium capitalize underline">
      Principal Investigator
    </h2>

    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`mx-auto flex lg:flex-row items-center justify-between flex-col`}
    >
      <motion.div variants={planetVariants("left")} className={`mx-auto`}>
        <img
          src={
            "https://www.iith.ac.in/assets/images/profiles/Subha_Narayan_Rath.jpg"
          }
          alt="Dr. Subha Narayan Rath"
          className="w-[80%] h-[80%] md:w-[60%] md:h-[60%] lg:w-[75%] lg:h-[75%] object-contain rounded-sm mx-auto  shadow-md"
        />
      </motion.div>
      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        <p className="mt-[8px] font-normal sm:text-[18px] text-[16px] text-left text-secondary-white">
          Our lab is led by{" "}
          <span className="font-bold text-black">Dr. Subha Narayan Rath</span>
          , Professor in the Department of Biomedical Engineering at Indian
          Institute of Technology, Hyderabad.
          <br /> <br />
          Dr. Subha Narayan Rath has an extensive background in Biomedical
          Engineering, with a Ph.D. from the National University of Singapore.
          His research focuses on regenerative medicine, tissue engineering, and
          the development of novel biomaterials.
          <br /> <br />
          He has over a decade of experience in academia and research, having
          served as a postdoctoral fellow in Germany and as a faculty member at
          IIT Hyderabad since 2013. His work is widely published and highly
          cited in the fields of biomedical engineering and regenerative
          medicine.
        </p>
      </motion.div>
    </motion.div>
  </section>
);

export default PI;
