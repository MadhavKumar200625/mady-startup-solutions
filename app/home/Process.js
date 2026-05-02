"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Understand",
    desc: "We deep dive into your idea, goals, and market.",
  },
  {
    number: "02",
    title: "Build",
    desc: "We design and develop your product with precision.",
  },
  {
    number: "03",
    title: "Launch",
    desc: "We take your product live with strong positioning.",
  },
  {
    number: "04",
    title: "Scale",
    desc: "We optimize, automate, and grow your business.",
  },
];

export default function Process() {
  return (
    <section className="relative py-28 md:py-36 overflow-hidden">

      {/* UNIQUE BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#F9FAFB]" />

        {/* subtle moving gradient feel */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-100/40 to-orange-100/40 blur-[160px] opacity-60" />
      </div>

      <div className="w-full px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 2xl:px-40">

        {/* HEADER */}
        <div className="max-w-3xl mb-24">
          <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 leading-tight">
            How we take your startup —
            <span className="block bg-gradient-to-r from-blue-500 to-orange-500 bg-clip-text text-transparent">
              from idea to scale.
            </span>
          </h2>

          <p className="mt-6 text-gray-600 text-lg md:text-xl">
            A clear, structured process that keeps everything fast, transparent, and effective.
          </p>
        </div>

        {/* FLOW */}
        <div className="relative">

          {/* CONNECTOR LINE */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-blue-200 via-gray-200 to-orange-200" />

          <div className="grid md:grid-cols-4 gap-16 relative">

            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                viewport={{ once: true }}
                className="relative flex flex-col items-start md:items-center text-left md:text-center"
              >
                {/* DOT */}
                <div className="relative z-10 w-14 h-14 rounded-full flex items-center justify-center text-white text-sm font-semibold bg-gradient-to-br from-blue-500 to-orange-500 shadow-md">
                  {step.number}
                </div>

                {/* CONTENT */}
                <div className="mt-6 max-w-xs">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* FLOAT OFFSET */}
                <div
                  className={`hidden md:block absolute ${
                    i % 2 === 0 ? "-top-6" : "top-6"
                  } left-1/2 -translate-x-1/2 w-0 h-0`}
                />
              </motion.div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}