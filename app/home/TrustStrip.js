"use client";

import { motion } from "framer-motion";

export default function TrustStrip() {
  const items = [
    "End-to-End Startup Solutions",
    "Built for Scalability",
    "Fast Execution",
    "Founder-First Approach",
    "AI & Automation Ready",
  ];

  return (
    <section className="py-10 md:py-14">
      <div className="w-full px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 2xl:px-40">
        
        <div className="bg-white/70 backdrop-blur-xl border border-gray-200 rounded-2xl px-6 py-6 md:px-10 md:py-8 shadow-[0_10px_40px_rgba(0,0,0,0.04)]">
          
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 text-sm md:text-base text-gray-600">
            
            {items.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-2"
              >
                {/* DOT INDICATOR */}
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-orange-500"></span>
                <span className="font-medium text-gray-700">{item}</span>
              </motion.div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}