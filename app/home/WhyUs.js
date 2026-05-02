"use client";

import { motion } from "framer-motion";

const points = [
  {
    title: "We Think Like Founders",
    desc: "We don’t just execute — we understand business, growth, and product decisions.",
  },
  {
    title: "End-to-End Execution",
    desc: "From idea to scaling — everything is handled under one roof.",
  },
  {
    title: "Speed Without Compromise",
    desc: "Fast delivery with high-quality systems and clean architecture.",
  },
  {
    title: "Built for Scale",
    desc: "Everything we create is designed to grow with your business.",
  },
];

export default function WhyUs() {
  return (
    <section className="relative py-32 md:py-40 overflow-hidden bg-[#EAF2FF]">

      {/* SUBTLE GRADIENT EDGE LIGHT */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-150px] right-[-150px] w-[500px] h-[500px] bg-blue-300/20 blur-[140px] rounded-full" />
        <div className="absolute bottom-[-150px] left-[-150px] w-[500px] h-[500px] bg-orange-300/20 blur-[140px] rounded-full" />
      </div>

      <div className="w-full px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 2xl:px-40">

        {/* HEADER */}
        <div className="mb-28">
          <h2 className="text-4xl md:text-6xl font-semibold text-gray-900 leading-[1.1]">
            Why founders choose us —
            <br />
            <span className="text-gray-500">
              and never have to look elsewhere.
            </span>
          </h2>
        </div>

        {/* CONTENT */}
        <div className="grid md:grid-cols-2 gap-y-20 gap-x-16">

          {points.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              className="group relative"
            >

              {/* BIG NUMBER BACKGROUND */}
              <div className="absolute -top-10 left-0 text-[120px] font-bold text-blue-100 pointer-events-none select-none">
                {`0${i + 1}`}
              </div>

              {/* CONTENT */}
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-semibold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-4 text-gray-600 text-lg leading-relaxed max-w-lg">
                  {item.desc}
                </p>

                {/* HOVER ACCENT */}
                <div className="mt-6 h-[2px] w-10 bg-gray-300 group-hover:w-24 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-orange-500 transition-all duration-300" />
              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}