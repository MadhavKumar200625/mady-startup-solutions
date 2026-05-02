"use client";

import { motion } from "framer-motion";
import {
  Code,
  Smartphone,
  Rocket,
  TrendingUp,
  BarChart3,
  Share2,
  Settings,
  Bot,
  Database,
} from "lucide-react";

export default function Services() {
  return (
    <section className="relative py-28 md:py-36 overflow-hidden">

      {/* PREMIUM BACKGROUND */}
      <div className="absolute inset-0 -z-10">

        {/* BASE */}
        <div className="absolute inset-0 bg-[#F6F8FB]" />

        {/* BLUE GLOW */}
        <div className="absolute top-[-120px] left-[-100px] w-[500px] h-[500px] bg-blue-200/40 rounded-full blur-[140px]" />

        {/* ORANGE GLOW */}
        <div className="absolute bottom-[-150px] right-[-120px] w-[500px] h-[500px] bg-orange-200/40 rounded-full blur-[140px]" />

        {/* CENTER LIGHT */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.6),transparent_70%)]" />

      </div>

      {/* SOFT DIVIDER (TOP + BOTTOM) */}


      <div className="w-full px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 2xl:px-40">

        {/* HEADER */}
        <div className="max-w-3xl mb-28">
          <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 leading-tight">
            Everything your startup needs —
            <span className="block bg-gradient-to-r from-blue-500 to-orange-500 bg-clip-text text-transparent">
              in one place.
            </span>
          </h2>

          <p className="mt-6 text-gray-600 text-lg md:text-xl">
            From building your product to scaling your business — we handle it all.
          </p>
        </div>

        {/* SERVICE FLOW */}
        <div className="space-y-32">

          <ServiceRow
            title="Build"
            subtitle="Turn your idea into a real product"
            items={[
              { icon: Code, title: "Web Development" },
              { icon: Smartphone, title: "Mobile Apps" },
              { icon: Rocket, title: "SaaS Platforms" },
            ]}
          />

          <ServiceRow
            title="Grow"
            subtitle="Get users and drive revenue"
            items={[
              { icon: TrendingUp, title: "SEO" },
              { icon: BarChart3, title: "Performance Ads" },
              { icon: Share2, title: "Social Media" },
            ]}
            reverse
          />

          <ServiceRow
            title="Scale"
            subtitle="Automate, optimize, and expand"
            items={[
              { icon: Settings, title: "CRM Systems" },
              { icon: Bot, title: "AI Automation" },
              { icon: Database, title: "Data Systems" },
            ]}
          />

        </div>
      </div>
    </section>
  );
}

/* ROW COMPONENT */
function ServiceRow({ title, subtitle, items, reverse }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="grid md:grid-cols-2 gap-16 items-center"
    >
      
      {/* TEXT SIDE */}
      <div className={reverse ? "md:order-2" : ""}>
        <h3 className="text-2xl md:text-4xl font-semibold text-gray-900">
          {title}
        </h3>

        <p className="mt-4 text-gray-600 text-lg">
          {subtitle}
        </p>
      </div>

      {/* ITEMS GRID */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {items.map((item, i) => {
          const Icon = item.icon;

          return (
            <div
              key={i}
              className="group relative px-5 py-4 rounded-2xl border border-gray-200 bg-white/40 backdrop-blur-lg hover:bg-white/60 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-white/60 border border-gray-200">
                  <Icon size={18} className="text-gray-700" />
                </div>

                <span className="text-sm font-medium text-gray-800">
                  {item.title}
                </span>
              </div>

              {/* subtle glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-blue-500/5 to-orange-500/5" />
            </div>
          );
        })}
      </div>

    </motion.div>
  );
}