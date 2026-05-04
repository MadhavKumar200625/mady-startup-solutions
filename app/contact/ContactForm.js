"use client";

import { useState, useRef, useEffect } from "react";
import countries from "@/lib/countires";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    country: countries[0],
    idea: "",
  });

  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const dropdownRef = useRef();

  // CLOSE ON OUTSIDE CLICK
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filtered = countries.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  // ✅ SUBMIT HANDLER
  const handleSubmit = async () => {
    if (!form.name || !form.email) {
      alert("Please fill required fields");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        setSuccess(true);

        // reset form
        setForm({
          name: "",
          email: "",
          phone: "",
          country: countries[0],
          idea: "",
        });
      } else {
        alert("Something went wrong");
      }
    } catch (err) {
      console.error(err);
      alert("Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-28 md:py-36 bg-[#FAFBFC]">
      <div className="w-full px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 2xl:px-40 grid md:grid-cols-2 gap-24">

        {/* FORM */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-12">
            Tell us about your startup
          </h2>

          <div className="space-y-8">

            <FloatingInput
              label="Your Name"
              onChange={(v) => setForm({ ...form, name: v })}
            />

            <FloatingInput
              label="Email Address"
              type="email"
              onChange={(v) => setForm({ ...form, email: v })}
            />

            {/* PHONE */}
            <div className="relative" ref={dropdownRef}>

              <label className="text-sm text-gray-500 mb-2 block">
                Phone Number
              </label>

              <div className="flex border border-gray-200 rounded-xl bg-white shadow-sm overflow-hidden focus-within:ring-2 focus-within:ring-black/10 transition">

                {/* COUNTRY SELECT */}
                <button
                  type="button"
                  onClick={() => setOpen(!open)}
                  className="flex items-center gap-2 px-4 py-4 border-r border-gray-200 min-w-[160px] hover:bg-gray-50 transition"
                >
                  <span className="text-sm font-medium text-gray-800 truncate">
                    {form.country.name}
                  </span>

                  <span className="text-gray-500 text-sm">
                    {form.country.code}
                  </span>

                  <svg
                    className={`w-4 h-4 ml-auto transition ${
                      open ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* PHONE INPUT */}
                <input
                  type="text"
                  placeholder="Enter phone number"
                  className="flex-1 px-4 py-4 outline-none"
                  value={form.phone}
                  onChange={(e) =>
                    setForm({ ...form, phone: e.target.value })
                  }
                />
              </div>

              {/* DROPDOWN */}
              {open && (
                <div className="absolute top-full left-0 mt-3 w-[320px] bg-white border border-gray-200 rounded-xl shadow-xl z-50 overflow-hidden">

                  {/* SEARCH */}
                  <input
                    type="text"
                    placeholder="Search country..."
                    className="w-full px-4 py-3 border-b outline-none text-sm"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />

                  {/* LIST */}
                  <div className="max-h-60 overflow-y-auto custom-scroll">

                    {filtered.length > 0 ? (
                      filtered.map((c, i) => (
                        <div
                          key={i}
                          onClick={() => {
                            setForm({ ...form, country: c });
                            setOpen(false);
                            setSearch("");
                          }}
                          className="px-4 py-3 hover:bg-gray-100 cursor-pointer text-sm flex justify-between"
                        >
                          <span>{c.name}</span>
                          <span className="text-gray-500">{c.code}</span>
                        </div>
                      ))
                    ) : (
                      <div className="px-4 py-3 text-sm text-gray-400">
                        No country found
                      </div>
                    )}

                  </div>
                </div>
              )}

            </div>

            <FloatingTextarea
              label="Your Idea"
              onChange={(v) => setForm({ ...form, idea: v })}
            />

            <button
              onClick={handleSubmit}
              disabled={loading}
              className={`w-full py-4 rounded-xl font-medium text-lg transition-all ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-black text-white hover:scale-[1.02] hover:shadow-lg"
              }`}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

          </div>
        </div>

        {/* SIDE PANEL */}
        <div className="flex flex-col justify-center space-y-8">

          <div>
            <h3 className="text-2xl font-semibold text-gray-900">
              Let’s talk directly
            </h3>

            <p className="mt-4 text-gray-600 text-lg">
              Reach out anytime — we respond fast and keep it real.
            </p>
          </div>

          <div className="space-y-5 text-gray-800 text-lg">

            <div className="flex items-center gap-3">
              <span>📧</span>
              <span>official@madysolutions.in</span>
            </div>

            <div className="flex items-center gap-3">
              <span>📱</span>
              <span>+91 93125 41719</span>
            </div>

            <div className="flex items-center gap-3">
              <span>📱</span>
              <span>+91 97707 72342</span>
            </div>

          </div>

          <div className="text-sm text-gray-500">
            No spam. No unnecessary calls. Just real conversations.
          </div>

        </div>

      </div>

      {/* ✅ SUCCESS POPUP */}
      {success && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center shadow-2xl animate-scaleIn">
            <h3 className="text-2xl font-semibold mb-4">
              🚀 Message Sent!
            </h3>
            <p className="text-gray-600 mb-6">
              Thank you for reaching out. We’ll get back to you within 24 hours.
            </p>
            <button
              onClick={() => setSuccess(false)}
              className="px-6 py-3 bg-black text-white rounded-lg hover:scale-105 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}

    </section>
  );
}

/* FLOATING INPUT */
function FloatingInput({ label, type = "text", onChange }) {
  return (
    <div className="relative">
      <input
        type={type}
        placeholder=" "
        onChange={(e) => onChange(e.target.value)}
        className="peer w-full px-4 pt-6 pb-3 border border-gray-200 rounded-xl bg-white outline-none focus:ring-2 focus:ring-black/10"
      />
      <label className="absolute left-4 top-2 text-sm text-gray-500 transition-all 
        peer-placeholder-shown:top-4 peer-placeholder-shown:text-base 
        peer-focus:top-2 peer-focus:text-sm">
        {label}
      </label>
    </div>
  );
}

/* FLOATING TEXTAREA */
function FloatingTextarea({ label, onChange }) {
  return (
    <div className="relative">
      <textarea
        rows="5"
        placeholder=" "
        onChange={(e) => onChange(e.target.value)}
        className="peer w-full px-4 pt-6 pb-3 border border-gray-200 rounded-xl bg-white outline-none focus:ring-2 focus:ring-black/10"
      />
      <label className="absolute left-4 top-2 text-sm text-gray-500 transition-all 
        peer-placeholder-shown:top-4 peer-placeholder-shown:text-base 
        peer-focus:top-2 peer-focus:text-sm">
        {label}
      </label>
    </div>
  );
}