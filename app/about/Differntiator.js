"use client";

const points = [
  "We think like founders, not vendors",
  "We stay beyond delivery",
  "We focus on growth, not just code",
  "We move fast without breaking things",
];

export default function Differentiator() {
  return (
    <section className="py-28 bg-[#F3F4F6]">

      <div className="w-full px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 2xl:px-40">

        <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 mb-16">
          What makes us different
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          {points.map((item, i) => (
            <div key={i} className="text-xl text-gray-700">
              → {item}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}