"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Link } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/60 border-b border-gray-200/80">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* LOGO */}
        <div className="flex items-center cursor-pointer">
          <img src="/mady-logo.png" alt="logo" className="h-14 w-auto" />
        </div>

        {/* NAV */}
        <nav className="hidden md:flex items-center gap-10">
          
          <NavLink text="Home" />

          {/* SERVICES */}
          <div
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <div className="flex items-center gap-1 cursor-pointer text-gray-700 hover:text-black transition">
              Services <ChevronDown size={16} />
            </div>

            <AnimatePresence>
              {open && (
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.98 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="absolute left-1/2 -translate-x-1/2 top-12 w-[850px] bg-white border border-gray-200 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.08)] p-8"
                >
                  <div className="grid grid-cols-4 gap-8">

                    <MenuColumn
                      title="Build"
                      items={[
                        ["Web Development", "Modern scalable apps"],
                        ["Mobile Apps", "iOS & Android"],
                        ["SaaS Platforms", "Full product build"],
                      ]}
                    />

                    <MenuColumn
                      title="Grow"
                      items={[
                        ["SEO", "Rank & dominate search"],
                        ["Performance Ads", "ROI focused campaigns"],
                        ["Social Media", "Brand & engagement"],
                      ]}
                    />

                    <MenuColumn
                      title="Scale"
                      items={[
                        ["CRM Systems", "Manage customers better"],
                        ["Automation", "Save time & cost"],
                        ["AI / LLM", "Smart business systems"],
                      ]}
                    />

                    {/* RIGHT PANEL */}
                    <div className="flex flex-col justify-between p-5 rounded-2xl bg-gradient-to-br from-blue-50 to-orange-50 border border-gray-200">
                      <div>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          Build and scale your startup with a team that thinks like founders.
                        </p>
                      </div>

                      <button className="mt-6 text-sm font-medium text-black border border-gray-300 rounded-lg px-4 py-2 hover:border-black transition">
                        Explore Services →
                      </button>
                    </div>

                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* <NavLink text="Work" /> */}
          <NavLink text="About" />
          <NavLink text="Contact" />
        </nav>

        {/* CTA (PREMIUM, NOT LOUD) */}
        <a href="/contact" className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-gray-300 text-gray-800 font-medium hover:border-black hover:text-black transition-all duration-300">
          Start Project
        </a>

        {/* MOBILE */}
        <div className="md:hidden text-2xl">☰</div>
      </div>
    </header>
  );
}

function NavLink({ text }) {
  return (
    <a
      href={`/${text == "Home" ? "" : text.toLowerCase()}`}
      className="relative text-gray-700 hover:text-black transition font-medium group"
    >
      {text}
      <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-blue-500 to-orange-500 transition-all duration-300 group-hover:w-full"></span>
    </a>
  );
}

function MenuColumn({ title, items }) {
  return (
    <div>
      <h4 className="font-semibold text-gray-900 mb-4">{title}</h4>
      <ul className="space-y-4">
        {items.map(([name, desc]) => (
          <li key={name} className="group cursor-pointer">
            <p className="text-gray-800 group-hover:text-black font-medium transition">
              {name}
            </p>
            <p className="text-xs text-gray-500">{desc}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}