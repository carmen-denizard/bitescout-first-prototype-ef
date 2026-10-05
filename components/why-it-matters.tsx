const restrictions = ['Allergies', 'Food intolerances', 'Personal preferences', 'Cultural restrictions']

export function WhyItMatters() {
  return (
    <section id="why" className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-5xl gap-10 px-6 py-20 md:grid-cols-2 md:gap-16">
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-widest">Why it matters</h2>
          <p className="mt-4 text-pretty text-3xl font-bold leading-snug tracking-tight md:text-4xl">
            Finding food that aligns with your needs shouldn&apos;t be difficult and frustrating.
          </p>
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-lg leading-relaxed">
            Many people with dietary restrictions find it difficult and frustrating trying to find food that aligns with
            their needs, including people with:
          </p>
          <ul className="mt-6 flex flex-wrap gap-3">
            {restrictions.map((item) => (
              <li
                key={item}
                className="rounded-full border-2 border-primary-foreground px-4 py-2 text-sm font-semibold"
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
