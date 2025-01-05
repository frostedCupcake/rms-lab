"use client";
import { motion } from "framer-motion";
import React from "react";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const publications = [
  {
    title:
      "Bioengineering strategies for 3D bioprinting of tubular construct using tissue-specific decellularized extracellular matrix.",
    year: "2022",
    authors: "M Kamaraj, PS Giri, S Mahapatra, F Pati, SN Rath",
    journal:
      "International Journal of Biological Macromolecules 223, 1405-1419",
  },
  {
    title:
      "Biocompatibility-on-a-chip: Characterization and evaluation of decellularized tendon extracellular matrix (tdECM) hydrogel for 3D stem cell culture in a microfluidic device.",
    year: "2022",
    authors: "A Bhatt, N Dhiman, PS Giri, GN Kasinathan, F Pati, SN Rath",
    journal: "International Journal of Biological Macromolecules 213, 768-779",
  },
  {
    title:
      "Modulation of 3D Printed Calcium-Deficient Apatite Constructs with Varying Mn Concentrations for Osteochondral Regeneration via Endochondral Differentiation.",
    year: "2022",
    authors: "M Kamaraj, UK Roopavath, PS Giri, NK Ponnusamy, SN Rath",
    journal: "ACS Applied Materials & Interfaces 14 (20), 23245-23259",
  },
  {
    title:
      "Facile route for 3D printing of transparent PETg-based hybrid biomicrofluidic devices promoting cell adhesion.",
    year: "2021",
    authors: "V Mehta, S Vilikkathala Sudhakaran, SN Rath",
    journal: "ACS Biomaterials Science & Engineering 7 (8), 3947-3963",
  },
];

const conferences = [
  {
    title:
      "Osteogenic differentiation of MSCs in 3D Bioglass-based scaffolds depends on their source of origin.",
    authors:
      "Subha N. Rath, Patcharakamon Nooeaid, Judith A. Roether, Raymund E. Horch, Aldo R. Boccaccini, Ulrich Kneser.",
    details: "TERMIS-asia pacific 2013, Sanghai, China.",
  },
  {
    title:
      "Cell-based therapy of bone defects in wounds by MSC-seeded in 3D scaffolds: the success depends on MSC source.",
    authors:
      "Subha N. Rath, Patcharakamon Nooeaid, Judith A. Roether, Raymund E. Horch, Aldo R. Boccaccini, Ulrich Kneser.",
    details:
      "Wound Care Con 2013. 2nd International and 7th National Annual conference of Society for wound care and research, Pondicherry, India. ISBN No. 978-81-95686-3-0.",
  },
  {
    title:
      "Osteoblasts and bone-marrow stromal cells in 3D biphasic calcium phosphate scaffolds: the effect of bioreactor on cell survival and differentiation.",
    authors:
      "Rath SN, Strobel LA, Arkudas A, Beier JP, Maier AK, Greil P, Horch RE, Kneser U.",
    details: "TERMIS-North America Meeting 2011. December 11 - 14, 2011.",
  },
  {
    title:
      "Interaction between 3D scaffolds and blood vessels – Implications for generation of axially vascularised bioartificial tissues.",
    authors:
      "Kneser U, Beier JP, Arkudas A, Polykandriotis E, Bleiziffer O, Rath S, Hutmacher DW, Horch RE.",
    details:
      "The European Materials Research Society (E-MRS) Fall Meeting & Exhibit. Warsaw University of Technology, Warsaw (Poland), September, 2008.",
  },
  {
    title:
      "Development of a vascularized bone graft by application of BMP-2 in PLDLLA-TCP-PCL-Extracel-HP™ hydrogel composite scaffolds along with arterio-venous (AV) loop.",
    authors:
      "SN Rath, G Pryymachuk, A Arkudas, E Polykandroitis, CXF Lam, S Schanbl, J Bier, RE Horsch, DW Hutmacher, U Kneser.",
    details:
      "International Congress for Modern Bone Regeneration, Hannover, Germany, 8 - 11 October 2009 (bone-tec 2009).",
  },
  {
    title:
      "Development of A Pre-vascularized 3D Composite Scaffold-Hydrogel System Using An Artery-Venous Loop For Tissue Engineering Applications.",
    authors: "Rath SN, Christopher LXF, Hutmacher DW, Kneser U.",
    details:
      "The International Conference on Biomedical Engineering (ICBME 2008), December 2008, Suntec Singapore International Convention & Exhibition Centre, Singapore.",
  },
  {
    title:
      "Comparison of chondrogenesis in static and dynamic environment using soft-PCL scaffolds.",
    authors: "Rath SN, Martina M, Cohn D, Hutmacher DW.",
    details:
      "8th Annual Tissue Engineering Society International (TESI) Conference & Exposition, October 22-25, 2005, Sanghai, P.R. China.",
  },
];
const Page = () => {
  return (
    <>
      <Head>
        <title>Publications</title>
      </Head>
      <Navbar />
      <section className="relative bg-gray-50  mt-[8rem] z-10 min-h-screen bg-gray-50 p-6 sm:p-10">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8 text-center">
            Recent important publications
          </h1>

          {/* Publications Section */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {publications.map((pub, index) => (
              <div
                key={index}
                className="p-4 sm:p-6 bg-white shadow-lg rounded-lg border border-gray-200 hover:shadow-xl transition"
              >
                <h2 className="text-base sm:text-lg font-semibold text-gray-900">
                  {pub.title}
                </h2>
                <p className="text-xs sm:text-sm text-gray-700 mt-2">
                  <strong>Authors:</strong> {pub.authors}
                </p>
                <p className="text-xs sm:text-sm text-gray-700">
                  <strong>Journal:</strong> {pub.journal}
                </p>
                <p className="text-xs sm:text-sm text-gray-700">
                  <strong>Year:</strong> {pub.year}
                </p>
              </div>
            ))}
          </motion.div>

          {/* Conferences Section */}
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 my-10 text-center">
            International conferences
          </h1>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {conferences.map((conf, index) => (
              <div
                key={index}
                className="p-4 sm:p-6 bg-white shadow-lg rounded-lg border border-gray-200 hover:shadow-xl transition"
              >
                <h2 className="text-base sm:text-lg font-semibold text-gray-900">
                  {conf.title}
                </h2>
                <p className="text-xs sm:text-sm text-gray-700 mt-2">
                  {conf.details}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Page;
