"use client";

import { motion } from "framer-motion";

const items = [
  {
    title: "Startup MVP Platform",
    desc: "End-to-end product built for scalability and fast launch.",
  },
  {
    title: "E-commerce Growth System",
    desc: "Conversion-focused platform with marketing integration.",
  },
];

export default function FeaturedWork() {
  return (
    <section className="py-32 bg-white">

      <div className="w-full px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 2xl:px-40 space-y-16">

        {items.map((item, i) => (
          <motion.div
            key={i}
            className="grid md:grid-cols-2 gap-12 items-center group"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* IMAGE */}
            <div className="h-[300px] md:h-[400px] bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl group-hover:scale-[1.02] transition" />

            {/* TEXT */}
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold text-gray-900">
                {item.title}
              </h3>

              <p className="mt-4 text-gray-600 text-lg">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}

      </div>
    </section>
  );
}