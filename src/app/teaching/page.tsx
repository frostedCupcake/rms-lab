// pages/teaching.js
import Navbar from "@/components/Navbar";
import React from "react";

const Teaching = () => {
    return (
        <div>
            <Navbar />
            <div className="p-4 mt-[8rem] px-[8rem]">
                <h1 className="text-3xl text-center py-10 font-bold mb-4">Teaching by RMS Lab</h1>
                <div className="grid lg:grid-cols-2 gap-5">


                    <div className="mb-4 shadow-md p-5 rounded-lg">
                        <h2 className="text-xl font-semibold">
                            BM 6023 Credits:1 Cell Technology
                        </h2>
                        <p>
                            <strong>SYLLABUS</strong>
                        </p>
                        <ul className="list-disc list-inside">
                            <li>Cell culture, splitting</li>
                            <li>Cell freezing and thawing</li>
                            <li>Identification of cells in blood smear</li>
                        </ul>
                        <p className="italic mt-2">
                            This course is intended for practical handling experience for students
                            for culture of mammalian cells. They should learn detailed step-wise
                            protocols in culturing, freezing, splitting of mammalian cells. In
                            addition, they should be able to see the cells found in blood.
                        </p>
                    </div>

                    <div className="mb-4 shadow-md p-5 rounded-lg">
                        <h2 className="text-xl font-semibold">
                            BM 5060 Credits:0.5 Cellular Physiology
                        </h2>
                        <p>
                            <strong>SYLLABUS</strong>
                        </p>
                        <ul className="list-disc list-inside">
                            <li>Cell structure and its organelles</li>
                            <li>Cell membrane</li>
                            <li>Cell homeostasis</li>
                            <li>Nucleus structure and function of its different components</li>
                        </ul>
                        <p className="italic mt-2">
                            This course is intended for basic understanding of cell physiology in
                            the engineers&apos; perspective. The students need to understand the
                            cellular structure and physiological functions.
                        </p>
                    </div>

                    <div className="mb-4 shadow-md p-5 rounded-lg">
                        <h2 className="text-xl font-semibold">
                            BM 5070 Credits:1.5 Systems Physiology
                        </h2>
                        <p>
                            <strong>SYLLABUS</strong>
                        </p>
                        <ul className="list-disc list-inside">
                            <li>Respiratory: anatomy, gas exchange, acid-base balance</li>
                            <li>Renal: anatomy, ion exchange, transport of metabolites</li>
                            <li>
                                Gastro-intestinal tract: anatomy, absorption of micro-nutrients,
                                dysfunction
                            </li>
                            <li>Cutaneous system: anatomy, temperature regulation</li>
                            <li>
                                Endocrine: basic function, major endocrine organs and their
                                regulation, bone physiology
                            </li>
                        </ul>
                        <p className="italic mt-2">
                            This course is intended for basic understanding of human physiology in
                            the engineers&apos; perspective. The students need to understand different
                            physiological systems; and their dysfunction by applying engineering
                            and mathematics knowledge. The important systems which may be covered
                            are respiratory, renal, endocrine, gastro-intestinal tract, cutaneous,
                            and other relevant systems.
                        </p>
                    </div>

                    <div className="mb-4 shadow-md p-5 rounded-lg">
                        <h2 className="text-xl font-semibold">
                            BM 6120 Credits:2 Tissue Engineering
                        </h2>
                        <p>
                            <strong>SYLLABUS</strong>
                        </p>
                        <p>
                            Tissue engineering: fundamentals and current status; Stem cells:
                            embryonic and mesenchymal stem cells; cell differentiation;
                            Extra-cellular matrix components and their regulation of cell
                            behavior; In vitro and in vivo testing of biomaterials. Bioreactor;
                            Cell migration; Growth factors; Different approaches for angiogenesis
                            and its importance.
                        </p>
                        <p className="italic mt-2">
                            The students will learn how to test the biomaterials along with a
                            number of cell types in vitro and in vivo. He should learn how the
                            physiological cues are combined together with biomaterials for
                            regenerative medicine point of view.
                        </p>
                    </div>

                    <div className="mb-4 shadow-md p-5 rounded-lg">
                        <h2 className="text-xl font-semibold">
                            BM 6126 Credits:1 Regenerative Medicine
                        </h2>
                        <p>
                            <strong>SYLLABUS</strong>
                        </p>
                        <p>
                            Tissue-specific regenerative medicine: Bone, cartilage. Regulation and
                            ethics of tissue engineering. Advanced methods applied in regenerative
                            medicine field.
                        </p>
                        <p className="italic mt-2">
                            The students will learn in a seminar-based manner about a number of
                            tissue-specific regenerative medicine and various approaches to
                            achieve this.
                        </p>
                    </div>

                    <div className="mb-4 shadow-md p-5 rounded-lg">
                        <h2 className="text-xl font-semibold">
                            BM 6123 Credits:2 Tissue Engineering Lab
                        </h2>
                        <p>
                            <strong>SYLLABUS</strong>
                        </p>
                        <ul className="list-disc list-inside">
                            <li>DNA, RNA isolation</li>
                            <li>PCR reaction</li>
                            <li>Western blotting</li>
                            <li>Immunohistochemistry</li>
                            <li>Cytoskeleton staining</li>
                        </ul>
                        <p className="italic mt-2">
                            This course is intended for practical handling experience for students
                            for molecular biology techniques such as DNA isolation, RNA isolation,
                            polymerase chain reaction, and transfection. They should also learn
                            basic molecular biology methods and their interpretation with respect
                            to cell culturing techniques. Prior knowledge of mammalian cell
                            culture is mandatory for this course.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Teaching;
