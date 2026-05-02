"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 md:pt-20 pb-24">
      
      {/* BACKGROUND BLOBS */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-150px] left-[-150px] w-[600px] h-[600px] bg-blue-200 rounded-full blur-[160px] opacity-50" />
        <div className="absolute bottom-[-180px] right-[-150px] w-[600px] h-[600px] bg-orange-200 rounded-full blur-[160px] opacity-50" />
      </div>

      {/* FLUID CONTAINER */}
      <div className="w-full px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 2xl:px-40 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-semibold leading-[1.05] text-gray-900"
          >
            From Idea to Scale —
            <br />
            <span className="bg-gradient-to-r from-blue-500 to-orange-500 bg-clip-text text-transparent">
              We Build Startups That Win.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 text-gray-600 text-lg md:text-xl leading-relaxed"
          >
            Development, Marketing & AI — everything you need to launch and grow,
            under one roof.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <button className="px-7 py-3.5 rounded-xl bg-black text-white font-medium hover:scale-[1.04] transition-all">
              Start Your Startup
            </button>

            <button className="px-7 py-3.5 rounded-xl border border-gray-300 text-gray-800 font-medium hover:border-black transition">
              See Our Work
            </button>
          </motion.div>
        </div>

        {/* RIGHT VISUAL */}
        <motion.div
  initial={{ opacity: 0, scale: 0.92 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8 }}
  className="relative h-[450px] md:h-[600px] lg:h-[700px] w-full"
>
  {/* CENTER CORE */}
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="w-64 h-64 rounded-full bg-gradient-to-br from-blue-500/20 to-orange-500/20 blur-3xl" />
  </div>

  {/* LARGE CARDS (ANCHORS) */}
  <FloatingCard title="Web Development" top="5%" left="5%" delay={0} size="lg" />
  <FloatingCard title="AI Automation" top="8%" right="8%" delay={0.2} size="lg" />

  {/* MEDIUM CARDS */}
  <FloatingCard title="Mobile Apps" top="70%" left="8%" delay={0.3} />
  <FloatingCard title="SEO Growth" top="45%" left="28%" delay={0.4} />
  <FloatingCard title="CRM Systems" bottom="10%" right="12%" delay={0.5} />
  <FloatingCard title="Performance Ads" top="68%" right="30%" delay={0.6} />
  <FloatingCard title="SaaS Platforms" top="20%" left="40%" delay={0.7} />
  <FloatingCard title="Cloud Systems" top="35%" right="35%" delay={0.8} />

  {/* SMALL CARDS (DETAIL LAYER) */}
  <FloatingCard title="UI/UX" top="25%" left="12%" delay={0.9} size="sm" />
  <FloatingCard title="Branding" top="55%" left="48%" delay={1} size="sm" />
  <FloatingCard title="Automation" bottom="48%" right="12%" delay={1.1} size="sm" />
  <FloatingCard title="Analytics" top="30%" right="5%" delay={1.2} size="sm" />
  <FloatingCard title="Funnels" top="75%" left="35%" delay={1.3} size="sm" />
  <FloatingCard title="APIs" top="60%" right="5%" delay={1.4} size="sm" />
</motion.div>

      </div>
    </section>
  );
}

/* FLOATING CARD */
function FloatingCard({ title, top, left, right, bottom, delay, size }) {
  const sizeClasses =
    size === "lg"
      ? "px-6 py-4 text-base font-semibold"
      : size === "sm"
      ? "px-3 py-2 text-xs"
      : "px-4 py-3 text-sm";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      style={{ top, left, right, bottom }}
      className={`
        absolute 
        bg-white/70 backdrop-blur-xl 
        border border-gray-200 
        rounded-xl 
        shadow-[0_10px_30px_rgba(0,0,0,0.08)]
        text-gray-800 
        ${sizeClasses}
        animate-float
        hover:scale-105
        hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)]
        transition-all duration-300
        hidden sm:block
      `}
    >
      {title}
    </motion.div>
  );
}