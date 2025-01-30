"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { publications } from "../../constants";
import { conferences } from "../../constants";

const Page = () => {
  const [activeTab, setActiveTab] = useState("publications"); // Manage active tab state

  return (
    <>
      <Head>
        <title>Publications & Conferences</title>
      </Head>
      <Navbar />
      <section className="relative bg-gray-50 mt-[8rem] z-10 min-h-screen p-6 sm:p-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center mb-8">
            <button
              className={`px-4 py-2 font-semibold rounded-l-lg ${
                activeTab === "publications"
                  ? "bg-gray-800 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
              onClick={() => setActiveTab("publications")}
            >
              Recent Publications
            </button>
            <button
              className={`px-4 py-2 font-semibold rounded-r-lg ${
                activeTab === "conferences"
                  ? "bg-gray-800 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
              onClick={() => setActiveTab("conferences")}
            >
              Conferences
            </button>
          </div>

          {activeTab === "publications" && (
            <>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8 text-center">
                Recent Important Publications
              </h1>
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
            </>
          )}

          {activeTab === "conferences" && (
            <>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8 text-center">
                International Conferences
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
                    className="p-4 sm:p-6 bg-white shadow-xs rounded-lg border border-gray-200 hover:shadow-xl transition"
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
            </>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Page;
