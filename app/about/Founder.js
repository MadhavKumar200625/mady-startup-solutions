"use client";

export default function Founder() {
  return (
    <section className="py-28 bg-white">

      <div className="w-full px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 2xl:px-40 grid md:grid-cols-2 gap-16 items-center">

        {/* IMAGE */}
        <div className="w-full h-[400px] bg-gray-200 rounded-2xl" />

        {/* TEXT */}
        <div>
          <h2 className="text-3xl md:text-5xl font-semibold text-gray-900">
            Built by people who understand startups
          </h2>

          <p className="mt-6 text-gray-600 text-lg">
            We’ve been in the early-stage chaos — building, failing, learning,
            and growing. That experience shapes everything we do.
          </p>
        </div>

      </div>

    </section>
  );
}