export default function BlogPage() {
  return (
    <div className="bg-[#F2F6FC] text-slate-900 pb-20">
      
      {/* HERO SECTION */}
      <div className="bg-gradient-to-b from-white to-[#E8F0FB] border-b border-slate-200 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            Accident Advice Centre
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed">
            Clear guidance, plain-English explanations and practical steps for UK drivers.  
            Whether you’ve just been in a collision or want to understand your rights,  
            these resources will help you feel confident about your next move.
          </p>
        </div>
      </div>

      {/* CATEGORY FILTERS (STATIC FOR NOW) */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="flex flex-wrap gap-3 text-xs sm:text-sm">
          {["Accident steps", "Non-fault claims", "Insurance", "Vehicle repairs", "Replacement cars"]
            .map((cat) => (
              <span
                key={cat}
                className="
                  px-4 py-2 rounded-full bg-white border border-slate-200 
                  text-slate-700 hover:border-sky-500 hover:text-sky-600 
                  cursor-pointer transition
                "
              >
                {cat}
              </span>
            ))}
        </div>
      </div>

      {/* ARTICLES GRID */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 grid gap-8 sm:grid-cols-2">

        {/* CARD 1 */}
        <article className="group rounded-2xl bg-white border border-slate-200 p-6 shadow-sm hover:shadow-xl transition hover:-translate-y-1">
          <div className="flex items-center gap-2 text-[11px] text-sky-600 font-medium">
            <span className="h-2 w-2 rounded-full bg-sky-600" />
            Accident steps
          </div>

          <h2 className="mt-3 text-lg font-semibold text-slate-900 group-hover:text-sky-600 transition">
            What to do immediately after a road accident
          </h2>

          <p className="mt-2 text-sm text-slate-600 leading-relaxed">
            The essential steps to take at the scene — exchanging details, collecting evidence,
            reporting properly and protecting your position.
          </p>

          <div className="mt-4 text-[11px] inline-block bg-slate-100 text-slate-500 px-2 py-1 rounded-full border border-slate-200">
            Coming soon
          </div>
        </article>

        {/* CARD 2 */}
        <article className="group rounded-2xl bg-white border border-slate-200 p-6 shadow-sm hover:shadow-xl transition hover:-translate-y-1">
          <div className="flex items-center gap-2 text-[11px] text-emerald-600 font-medium">
            <span className="h-2 w-2 rounded-full bg-emerald-600" />
            Non-fault claims
          </div>

          <h2 className="mt-3 text-lg font-semibold text-slate-900 group-hover:text-emerald-600 transition">
            How non-fault claims affect your No Claims Bonus
          </h2>

          <p className="mt-2 text-sm text-slate-600 leading-relaxed">
            What insurers consider a “fault claim”, how premiums are calculated, and how we help
            protect your No Claims Bonus wherever possible.
          </p>

          <div className="mt-4 text-[11px] inline-block bg-slate-100 text-slate-500 px-2 py-1 rounded-full border border-slate-200">
            Guide launching soon
          </div>
        </article>

        {/* CARD 3 */}
        <article className="group rounded-2xl bg-white border border-slate-200 p-6 shadow-sm hover:shadow-xl transition hover:-translate-y-1">
          <div className="flex items-center gap-2 text-[11px] text-blue-600 font-medium">
            <span className="h-2 w-2 rounded-full bg-blue-600" />
            Insurance
          </div>

          <h2 className="mt-3 text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition">
            Understanding liability: who decides fault?
          </h2>

          <p className="mt-2 text-sm text-slate-600 leading-relaxed">
            A breakdown of how insurers determine fault, the role of evidence, and what happens
            when drivers disagree.
          </p>

          <div className="mt-4 text-[11px] inline-block bg-slate-100 text-slate-500 px-2 py-1 rounded-full border border-slate-200">
            Coming soon
          </div>
        </article>

        {/* CARD 4 */}
        <article className="group rounded-2xl bg-white border border-slate-200 p-6 shadow-sm hover:shadow-xl transition hover:-translate-y-1">
          <div className="flex items-center gap-2 text-[11px] text-purple-600 font-medium">
            <span className="h-2 w-2 rounded-full bg-purple-600" />
            Replacement vehicles
          </div>

          <h2 className="mt-3 text-lg font-semibold text-slate-900 group-hover:text-purple-600 transition">
            How replacement hire works after a non-fault accident
          </h2>

          <p className="mt-2 text-sm text-slate-600 leading-relaxed">
            What “like-for-like” really means, how eligibility works, and how hire is recovered
            from the at-fault insurer.
          </p>

          <div className="mt-4 text-[11px] inline-block bg-slate-100 text-slate-500 px-2 py-1 rounded-full border border-slate-200">
            Full article coming soon
          </div>
        </article>
      </div>

      {/* CTA */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="rounded-2xl bg-gradient-to-r from-sky-600 to-blue-600 text-white p-8 shadow-xl">
          <h3 className="text-xl font-semibold">Need advice right now?</h3>
          <p className="mt-2 text-sm text-slate-100 max-w-xl">
            If you’ve just been in an accident or you’re unsure what your insurer has told you,
            speak to our team and we’ll explain your options clearly.
          </p>
          <div className="mt-5 flex flex-col sm:flex-row gap-3 text-sm">
            <a
              href="tel:+44 7440 138946"
              className="inline-flex items-center justify-center rounded-full bg-white 
              text-sky-700 px-6 py-3 font-semibold shadow-md hover:bg-slate-100 transition"
            >
              Call +44 7440 138946
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-slate-100 
              px-6 py-3 font-medium text-white hover:bg-white/10 transition"
            >
              Request a call-back
            </a>
          </div>
        </div>
      </div>

    </div>
  );
}
