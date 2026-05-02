"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative py-32 md:py-40 overflow-hidden bg-[#F8FAFC]">

      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-120px] left-[-120px] w-[500px] h-[500px] bg-blue-200/20 blur-[140px] rounded-full" />
        <div className="absolute bottom-[-120px] right-[-120px] w-[500px] h-[500px] bg-orange-200/20 blur-[140px] rounded-full" />
      </div>

      <div className="w-full px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 2xl:px-40 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-semibold text-gray-900 leading-tight"
          >
            We build startups —
            <br />
            <span className="text-gray-500">
              not just products.
            </span>
          </motion.h1>

          <p className="mt-6 text-lg text-gray-600 max-w-xl">
            Mady Startup Solution is built to help founders go from idea to
            scalable business with the right tech, strategy, and execution.
          </p>
        </div>

        {/* RIGHT */}
        <div className="hidden md:block">
          <div className="w-full h-[400px] rounded-2xl bg-gradient-to-br from-blue-100 to-orange-100 blur-[2px]" />
        </div>

      </div>
    </section>
  );
}