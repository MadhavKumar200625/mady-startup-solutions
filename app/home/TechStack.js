"use client";

import { motion } from "framer-motion";

const stack = [
  {
    title: "Frontend",
    items: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "PHP", "REST APIs"],
  },
  {
    title: "Mobile",
    items: ["Android (Kotlin)", "React Native", "iOS"],
  },
  {
    title: "Database",
    items: ["MongoDB", "MySQL", "Firebase"],
  },
  {
    title: "AI & Automation",
    items: ["OpenAI / LLMs", "Automation Workflows", "Chatbots"],
  },
  {
    title: "Tools & Infra",
    items: ["AWS", "Vercel", "Docker", "Git"],
  },
];

export default function TechStack() {
  return (
    <section className="relative py-32 md:py-40 overflow-hidden bg-[#F7FAFF]">

      {/* SUBTLE BACKGROUND ACCENT */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-120px] right-[-120px] w-[500px] h-[500px] bg-blue-200/20 blur-[140px] rounded-full" />
        <div className="absolute bottom-[-120px] left-[-120px] w-[500px] h-[500px] bg-orange-200/20 blur-[140px] rounded-full" />
      </div>

      <div className="w-full px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 2xl:px-40">

        {/* HEADER */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">

          {/* LEFT */}
          <div>
            <h2 className="text-4xl md:text-6xl font-semibold text-gray-900 leading-tight">
              Built with modern —
              <br />
              <span className="text-gray-500">
                scalable technology.
              </span>
            </h2>
          </div>

          {/* RIGHT */}
          <div>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
              We use proven technologies and modern architectures to build fast,
              scalable, and future-ready products.
            </p>

            <div className="mt-6 text-sm text-gray-500">
              We don't chase trends. We use technology that's proven, fast, and built to handle growth without falling over. Every tool we use is chosen because it's the right fit — not because it's new, not because it looks good on a slide.

            </div>
          </div>

        </div>

        {/* STACK GRID */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">

          {stack.map((group, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group relative p-6 rounded-2xl border border-gray-200 bg-white/60 backdrop-blur-lg hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)] transition-all duration-300"
            >
              
              {/* TITLE */}
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {group.title}
              </h3>

              {/* ITEMS */}
              <div className="flex flex-wrap gap-2">
                {group.items.map((item, idx) => (
                  <span
                    key={idx}
                    className="text-sm px-3 py-1.5 rounded-lg bg-white/70 border border-gray-200 text-gray-700"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* HOVER ACCENT */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-blue-500/5 to-orange-500/5" />
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}