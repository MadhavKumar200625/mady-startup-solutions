"use client";

import { motion } from "framer-motion";

const cases = [
  {
    tag: "Startup Build",
    title: "Food Delivery Platform",
    desc: "End-to-end system with real-time tracking, payments, and scalable backend.",
    result: "Handles 10K+ daily users",
  },
  {
    tag: "E-commerce",
    title: "D2C Brand Growth",
    desc: "Custom storefront, conversion funnels, and automated CRM workflows.",
    result: "Optimized for repeat sales",
  },
  {
    tag: "SaaS",
    title: "Subscription Platform",
    desc: "Dashboard, auth, billing, and scalable architecture for SaaS growth.",
    result: "Launch-ready product system",
  },
];

export default function CaseStudies() {
  return (
    <section className="relative pb-32 md:pb-40 overflow-hidden bg-[#FDFCF9]">

      {/* BACKGROUND ACCENTS */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-120px] left-[-120px] w-[500px] h-[500px] bg-orange-200/20 blur-[140px] rounded-full" />
        <div className="absolute bottom-[-120px] right-[-120px] w-[500px] h-[500px] bg-blue-200/20 blur-[140px] rounded-full" />
      </div>

      <div className="w-full px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 2xl:px-40">

        {/* HEADER (FIXED BALANCE) */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">

          {/* LEFT */}
          <div>
            <h2 className="text-4xl md:text-6xl font-semibold text-gray-900 leading-tight">
              What we can build —
              <br />
              <span className="text-gray-500">
                and scale for you.
              </span>
            </h2>
          </div>

          {/* RIGHT */}
          <div>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
              Even if you’re starting from zero, we help you design, build,
              launch, and scale products that are ready for real-world growth.
            </p>

            <div className="mt-6 text-sm text-gray-500">
              Every project we take on starts with one question — what does this actually need to do? Not what looks impressive in a proposal. Not what's trending on Twitter. What does your specific business need to work, grow, and make money?

            </div>
            <div className="mt-6 text-sm text-gray-500">
From that answer, we build. Sometimes it's a lean MVP to test an idea. Sometimes it's a full platform with automation, integrations, and a dashboard. Sometimes it's a website redesign that actually converts. We figure out what makes sense and we build that — not more, not less.
            </div>
          </div>

        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-10">

          {cases.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="group relative p-7 rounded-2xl border border-gray-200 bg-white/70 backdrop-blur-xl hover:-translate-y-2 hover:shadow-[0_25px_80px_rgba(0,0,0,0.08)] transition-all duration-300 overflow-hidden"
            >
              
              {/* TAG */}
              <div className="text-xs font-medium text-blue-600 mb-3">
                {item.tag}
              </div>

              {/* TITLE */}
              <h3 className="text-xl font-semibold text-gray-900">
                {item.title}
              </h3>

              {/* DESC */}
              <p className="mt-4 text-gray-600 leading-relaxed text-sm">
                {item.desc}
              </p>

              {/* RESULT */}
              <div className="mt-6 text-sm font-medium text-gray-800">
                → {item.result}
              </div>

              {/* BOTTOM ACCENT BAR */}
              <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-blue-500 to-orange-500 opacity-0 group-hover:opacity-100 transition" />

              {/* HOVER LIGHT */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-blue-500/5 to-orange-500/5" />
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}