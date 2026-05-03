"use client";

import {

  FaTwitter,

  FaLinkedinIn,

  FaInstagram,

  FaFacebookF,

  FaGithub,

  FaYoutube,

} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-gray-200 bg-white/70 backdrop-blur-xl">
      
      {/* TOP CTA STRIP */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="rounded-2xl border border-gray-200 bg-white p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_10px_40px_rgba(0,0,0,0.05)]">
          
          <div>
            <h3 className="text-xl font-semibold text-gray-900">
              Ready to build your startup?
            </h3>
            <p className="text-gray-500 text-sm mt-1">
              Let’s turn your idea into a scalable product.
            </p>
          </div>

          <a href="contact" className="px-6 py-3 rounded-xl border border-gray-300 text-gray-800 font-medium hover:border-black hover:text-black transition-all">
            Start a Project →
          </a>
        </div>
      </div>

      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-5 gap-10">
        
        {/* BRAND */}
        <div className="md:col-span-2">
          <img src="/mady-logo.png" alt="logo" className="h-14 mb-4" />

          <p className="text-gray-600 text-sm leading-relaxed max-w-sm">
            We build, launch, and scale startups. From development to marketing
            and AI systems — everything under one roof.
          </p>

          {/* SOCIALS */}
          <div className="flex items-center gap-4 mt-6">
            <SocialIcon icon={<FaTwitter size={18} />} />
            <SocialIcon icon={<FaLinkedinIn size={18} />} />
            <SocialIcon icon={<FaInstagram size={18} />} />
            <SocialIcon icon={<FaFacebookF size={18} />} />
            <SocialIcon icon={<FaGithub size={18} />} />
          </div>
        </div>

        {/* COMPANY */}
        <FooterColumn
          title="Company"
          items={["About", "Work", "Careers", "Contact"]}
        />

        {/* SERVICES */}
        <FooterColumn
          title="Services"
          items={[
            "Web Development",
            "Mobile Apps",
            "SEO",
            "Marketing",
            "AI / LLM",
          ]}
        />

        {/* RESOURCES */}
        <FooterColumn
          title="Resources"
          items={[
            "Blog",
            "Case Studies",
            "Privacy Policy",
            "Terms of Service",
          ]}
        />
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Mady Startup Solution. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-black transition">
              Privacy
            </a>
            <a href="#" className="hover:text-black transition">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* FOOTER COLUMN */
function FooterColumn({ title, items }) {
  return (
    <div>
      <h4 className="font-semibold text-gray-900 mb-4">{title}</h4>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item}>
            <a
              href="#"
              className="text-sm text-gray-600 hover:text-black transition"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* SOCIAL ICON */
function SocialIcon({ icon }) {
  return (
    <a href="https://www.linkedin.com/company/madysolutions/" className="p-2 rounded-lg border border-gray-200 text-gray-600 hover:text-black hover:border-gray-300 hover:-translate-y-0.5 transition-all cursor-pointer">
      {icon}
    </a>
  );
}