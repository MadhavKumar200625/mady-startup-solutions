"use client";

import { motion } from "framer-motion";

const points = [
  {
    title: "We move at startup speed",
    desc: "We move at startup speed. Early momentum is everything. The window to get traction, attract users, and prove your idea is short. We don't do slow reviews and endless revision cycles. We move fast because we know you can't afford not to."
  },
  {
    title: "We're genuinely in your corner",
    desc: "We're genuinely in your corner. We've said no to projects we didn't believe in. Not because we were full — because taking money for something we knew wouldn't work isn't something we're okay with. If something's going wrong, we say it early."
  },
  {
    title: "One team. Every skill",
    desc: "One team. Every skill. Design, dev, SEO, ads, automation — same team, same WhatsApp thread, same goal. You don't re-explain your product to a new person every time you need something. Everyone already knows the context."
  },
  {
    title: "We'll tell you when something's a bad idea",
    desc: "We'll tell you when something's a bad idea. Especially if it's yours. We'd rather say it now than spend three months building something that quietly doesn't work. You'll thank us later — most clients do."
  },
  {
    title: "Everything we build is made for what comes next",
    desc: "Everything we build is made for what comes next. What you launch at 100 users needs to still work at 10,000. We think about that before writing the first line of code — so you're not starting over every time you grow."
  },
  {
    title: "We stay around",
    desc: "We stay around. Most agencies disappear after launch. We're the ones you're still texting eight months later when you want to add a feature or something needs fixing. Long-term is how we work."
  }

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
        <div className="mb-28 max-w-1/2">
          <h2 className="text-4xl md:text-6xl font-semibold text-gray-900 leading-[1.1]">
            Why founders choose us —
            <br />
            <span className="text-gray-700">
              and never have to look elsewhere.
            </span>
            <p className="mt-6 text-lg md:text-xl font-light text-gray-600 leading-relaxed max-w-xl">
                Almost every client we've worked with came from a bad experience somewhere else. Deposit paid, excitement high, then silence. We heard this story enough times that it stopped surprising us. Here's where we're different.

            </p>
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
              <div className="absolute -top-12 left-0 text-[120px] font-bold text-blue-200 pointer-events-none select-none">
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