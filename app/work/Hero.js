"use client";

import { motion } from "framer-motion";

export default function WorkHero() {
  return (
    <section className="relative py-32 md:py-40 bg-[#F7FAFF] overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-120px] left-[-120px] w-[500px] h-[500px] bg-blue-200/30 blur-[140px] rounded-full" />
        <div className="absolute bottom-[-120px] right-[-120px] w-[500px] h-[500px] bg-orange-200/30 blur-[140px] rounded-full" />
      </div>

      <div className="w-full px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 2xl:px-40">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-semibold text-gray-900 leading-tight"
        >
          Work that speaks —
          <br />
          <span className="bg-gradient-to-r from-blue-500 to-orange-500 bg-clip-text text-transparent">
            results that scale.
          </span>
        </motion.h1>

        <p className="mt-6 text-lg text-gray-600 max-w-xl">
          We design, build, and grow startups with real-world execution.
        </p>

      </div>
    </section>
  );
}