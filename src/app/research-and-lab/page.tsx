import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Equipments from "../../components/Equipments";
import React from "react";

// Research Interests Data
const researchInterests = [
  {
    title: "3D Bio-Printing of Tissues using Patient-Derived Stem Cells",
    points: [
      "Primary isolation of cells from patient samples",
      "Stem cell research (Mesenchymal and cancer-derived)",
      "3D bio-printing of osteochondral tissues",
    ],
    image: {
      src: "/assets/rsh-lab.png",
      alt: "3D printable SiO₂ nanoparticle ink for specific bone regeneration.",
      caption:
        "(Above figure showing: 3D printable SiO₂ nanoparticle ink for specific bone regeneration. For details, refer Uday et al, 2019, RSC Advances 9 (41), 23832-23842)",
    },
  },
  {
    title: "Bio-Mimicking Smart Designed Biomaterials",
    points: [
      "Bio-mimicked surface pattern for stem cell differentiation",
      "Chemically modified bioinks for 3D bioprinting and drug release applications",
      "Application of hydrogels for specific stem cell pathway differentiation",
      "Molecular biological analyses of osteogenesis and angiogenesis pathways",
    ],
  },
  {
    title:
      "Cancer-on-Chips to Study Anti-Cancer Drugs against Cancer Stem Cells",
    points: [
      "Study of cancer-derived stem cells affecting malignant tissue behavior",
      "Microfluidic chips simulating the physiology of stem cell culture and drug testing",
      "Testing of novel anti-cancer drugs in 3D cancer organoid models",
    ],
  },
];

const RMSLabPage = () => {
  return (
    <div className="flex  flex-col relative gap-5">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="px-10 mb-5 bg-gray-50 mt-[8rem]">
        {/* Equipment Section */}
        <Equipments />

        {/* Section Heading */}
        <h3 className="text-black mt-10 text-2xl flex items-center justify-center font-medium underline">
          Current Research Interests of Our Lab:
        </h3>

        {/* Research Interests Section */}
        <section className="space-y-10 mt-5 mx-auto text-left max-w-[40rem]">
          {researchInterests.map((interest, index) => (
            <div key={index} className="space-y-5">
              {/* Title */}
              <h4 className="text-xl font-semibold text-center text-gray-900">
                {interest.title}
              </h4>

              {/* Bullet Points */}
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

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default RMSLabPage;
