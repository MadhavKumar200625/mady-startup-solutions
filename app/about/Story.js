"use client";

export default function Story() {
  return (
    <section className="py-28 bg-white">

      <div className="w-full px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 2xl:px-40 grid md:grid-cols-2 gap-16">

        {/* LEFT */}
        <div>
          <h2 className="text-3xl md:text-5xl font-semibold text-gray-900">
            Why we started
          </h2>
        </div>

        {/* RIGHT */}
        <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
          <p>
            Most startups fail not because of bad ideas, but because of poor execution.
          </p>

          <p>
            We saw founders struggling with multiple vendors — developers,
            marketers, designers — with no unified strategy.
          </p>

          <p>
            So we built a system where everything is under one roof —
            fast, aligned, and focused on growth.
          </p>
        </div>

      </div>

    </section>
  );
}