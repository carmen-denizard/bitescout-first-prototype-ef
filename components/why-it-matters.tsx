// The kinds of dietary restrictions listed as pills in this section.
const restrictions = ['Allergies', 'Food intolerances', 'Personal preferences', 'Cultural restrictions']

export function WhyItMatters() {
  return (
    // Full-width coral band. id="why" lets the "Why it matters" links scroll here.
    <section id="why" className="bg-primary text-primary-foreground">
      {/* Centered content: one column on mobile, two columns side by side on medium screens and up */}
      <div className="mx-auto grid max-w-5xl gap-10 px-6 py-20 md:grid-cols-2 md:gap-16">
        {/* Left column: section label and big statement */}
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-widest">Why it matters</h2>
          <p className="mt-4 text-pretty text-3xl font-bold leading-snug tracking-tight md:text-4xl">
            {/* &apos; is how an apostrophe is written safely inside JSX */}
            Finding food that aligns with your needs shouldn&apos;t be difficult and frustrating.
          </p>
        </div>

        {/* Right column: explanation and the list of restriction pills, vertically centered */}
        <div className="flex flex-col justify-center">
          <p className="text-lg leading-relaxed">
            Many people with dietary restrictions find it difficult and frustrating trying to find food that aligns with
            their needs, including people with:
          </p>
          {/* Pills wrap onto new lines when they run out of room */}
          <ul className="mt-6 flex flex-wrap gap-3">
            {/* Create one vanilla custard pill for each restriction in the list above */}
            {restrictions.map((item) => (
              <li
                key={item}
                className="rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-secondary-foreground"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
