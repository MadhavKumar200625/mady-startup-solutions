"use client";

import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <section className="relative py-28 md:py-36 overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10">

        {/* BASE */}
        <div className="absolute inset-0 bg-[#F8FAFC]" />

        {/* BLUE GLOW */}
        <div className="absolute top-[-120px] left-[-120px] w-[500px] h-[500px] bg-blue-200/30 blur-[140px] rounded-full" />

        {/* ORANGE GLOW */}
        <div className="absolute bottom-[-120px] right-[-120px] w-[500px] h-[500px] bg-orange-200/30 blur-[140px] rounded-full" />

        {/* CENTER LIGHT */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.6),transparent_70%)]" />

      </div>

      <div className="w-full px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 2xl:px-40 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-semibold text-gray-900 leading-[1.1]"
          >
            Let’s build something
            <br />
            <span className="bg-gradient-to-r from-blue-500 to-orange-500 bg-clip-text text-transparent">
              great together.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-6 text-lg md:text-xl text-gray-600 max-w-xl"
          >
            Tell us about your idea, your goals, or even just a rough thought —
            we’ll help you shape it into something real.
          </motion.p>

          {/* QUICK ACTION */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <button className="px-7 py-3.5 rounded-xl bg-black text-white font-medium hover:scale-[1.04] transition-all">
              Start a Project
            </button>

            <button className="px-7 py-3.5 rounded-xl border border-gray-300 text-gray-800 font-medium hover:border-black transition">
              Talk to Us
            </button>
          </motion.div>
        </div>

        {/* RIGHT VISUAL */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="relative h-[350px] md:h-[450px]"
        >
          {/* FLOATING ELEMENTS */}
          <FloatingBubble label="Idea" top="10%" left="10%" />
          <FloatingBubble label="Build" top="50%" left="25%" />
          <FloatingBubble label="Launch" top="20%" right="15%" />
          <FloatingBubble label="Scale" bottom="10%" right="20%" />

          {/* CENTER CORE */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-40 h-40 rounded-full bg-gradient-to-br from-blue-500/20 to-orange-500/20 blur-2xl" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}

/* FLOATING BUBBLE */
function FloatingBubble({ label, top, left, right, bottom }) {
  return (
    <div
      style={{ top, left, right, bottom }}
      className="absolute px-4 py-2 rounded-xl bg-white/70 backdrop-blur-xl border border-gray-200 text-sm font-medium text-gray-800 shadow-sm animate-float hidden sm:block"
    >
      {label}
    </div>
  );
}