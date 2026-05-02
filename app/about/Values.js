"use client";

import { motion } from "framer-motion";

const values = [
  {
    title: "Clarity over complexity",
    desc: "We simplify problems instead of over-engineering solutions.",
  },
  {
    title: "Speed with direction",
    desc: "Fast execution guided by strategy, not guesswork.",
  },
  {
    title: "Built for long-term",
    desc: "We create systems that scale, not just launch.",
  },
];

export default function Values() {
  return (
    <section className="relative py-32 md:py-40 overflow-hidden bg-[#F8FAFC]">

      {/* BACKGROUND ACCENT */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-100px] right-[-100px] w-[400px] h-[400px] bg-blue-200/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-100px] left-[-100px] w-[400px] h-[400px] bg-orange-200/20 blur-[120px] rounded-full" />
      </div>

      <div className="w-full px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 2xl:px-40">

        {/* HEADER */}
        <div className="mb-24">
          <h2 className="text-4xl md:text-6xl font-semibold text-gray-900 leading-tight">
            How we work —
            <br />
            <span className="text-gray-500">
              and what we believe in.
            </span>
          </h2>
        </div>

        {/* VALUES */}
        <div className="grid md:grid-cols-3 gap-16">

          {values.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              className="group relative"
            >

              {/* BIG NUMBER */}
              <div className="text-[80px] font-semibold text-gray-200">
                0{i + 1}
              </div>

              {/* CONTENT */}
              <div className="mt-4">
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-gray-600 leading-relaxed max-w-sm">
                  {item.desc}
                </p>
              </div>

              {/* HOVER LINE */}
              <div className="mt-6 h-[2px] w-10 bg-gray-300 group-hover:w-24 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-orange-500 transition-all duration-300" />

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}