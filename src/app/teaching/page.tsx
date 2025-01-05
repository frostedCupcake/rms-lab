import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

// Constants for teaching data
const courses = [
  {
    code: "BM 6023",
    credits: "1",
    title: "Cell Technology",
    syllabus: [
      "Cell culture, splitting",
      "Cell freezing and thawing",
      "Identification of cells in blood smear",
    ],
    description:
      "This course is intended for practical handling experience for students for culture of mammalian cells. They should learn detailed step-wise protocols in culturing, freezing, splitting of mammalian cells. In addition, they should be able to see the cells found in blood.",
  },
  {
    code: "BM 5060",
    credits: "0.5",
    title: "Cellular Physiology",
    syllabus: [
      "Cell structure and its organelles",
      "Cell membrane",
      "Cell homeostasis",
      "Nucleus structure and function of its different components",
    ],
    description:
      "This course is intended for basic understanding of cell physiology in the engineers' perspective. The students need to understand the cellular structure and physiological functions.",
  },
  {
    code: "BM 5070",
    credits: "1.5",
    title: "Systems Physiology",
    syllabus: [
      "Respiratory: anatomy, gas exchange, acid-base balance",
      "Renal: anatomy, ion exchange, transport of metabolites",
      "Gastro-intestinal tract: anatomy, absorption of micro-nutrients, dysfunction",
      "Cutaneous system: anatomy, temperature regulation",
      "Endocrine: basic function, major endocrine organs and their regulation, bone physiology",
    ],
    description:
      "This course is intended for basic understanding of human physiology in the engineers' perspective. The students need to understand different physiological systems; and their dysfunction by applying engineering and mathematics knowledge. The important systems which may be covered are respiratory, renal, endocrine, gastro-intestinal tract, cutaneous, and other relevant systems.",
  },
  {
    code: "BM 6120",
    credits: "2",
    title: "Tissue Engineering",
    syllabus: [
      "Tissue engineering: fundamentals and current status",
      "Stem cells: embryonic and mesenchymal stem cells",
      "Cell differentiation",
      "Extra-cellular matrix components and their regulation of cell behavior",
      "In vitro and in vivo testing of biomaterials",
      "Bioreactor; Cell migration; Growth factors",
      "Approaches for angiogenesis and its importance",
    ],
    description:
      "The students will learn how to test the biomaterials along with a number of cell types in vitro and in vivo. He should learn how the physiological cues are combined together with biomaterials for regenerative medicine point of view.",
  },
  {
    code: "BM 6126",
    credits: "1",
    title: "Regenerative Medicine",
    syllabus: [
      "Tissue-specific regenerative medicine: Bone, cartilage",
      "Regulation and ethics of tissue engineering",
      "Advanced methods applied in regenerative medicine field",
    ],
    description:
      "The students will learn in a seminar-based manner about a number of tissue-specific regenerative medicine and various approaches to achieve this.",
  },
  {
    code: "BM 6123",
    credits: "2",
    title: "Tissue Engineering Lab",
    syllabus: [
      "DNA, RNA isolation",
      "PCR reaction",
      "Western blotting",
      "Immunohistochemistry",
      "Cytoskeleton staining",
    ],
    description:
      "This course is intended for practical handling experience for students for molecular biology techniques such as DNA isolation, RNA isolation, polymerase chain reaction, and transfection. They should also learn basic molecular biology methods and their interpretation with respect to cell culturing techniques. Prior knowledge of mammalian cell culture is mandatory for this course.",
  },
];

const Teaching = () => {
  return (
    <div>
      <Navbar />
      <div className="md:p-4 p-2 bg-gray-50  mt-[4rem] md:mt-[8rem] md:px-[8rem]">
        <h1 className="text-2xl md:text-3xl text-center py-8 pb-4 font-bold">
          Teaching by RMS Lab
        </h1>
        <div className="grid lg:grid-cols-2 gap-5">
          {/* Render courses dynamically */}
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
