import { ArrowUpRight, Store, Utensils, Warehouse } from 'lucide-react'

const placeTypes = [
  { label: 'Restaurants', icon: Utensils },
  { label: 'Grocery stores', icon: Store },
  { label: 'Pantries', icon: Warehouse },
]

export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-6 pb-20 pt-16 md:pt-24">
      <p className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-sm font-medium">
        <span className="size-2 rounded-full bg-primary" aria-hidden="true" />
        Project overview
      </p>
      <h1 className="mt-6 max-w-3xl text-balance text-4xl font-bold leading-tight tracking-tight md:text-6xl">
        Find food places that fit{' '}
        <span className="relative whitespace-nowrap">
          <span className="relative z-10">your diet</span>
          <span className="absolute inset-x-0 bottom-1 -z-0 h-3 bg-primary md:h-4" aria-hidden="true" />
        </span>
        .
      </h1>
      <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
        Bitescout is a Google Maps-like web service that finds food-related places with accommodations for people with
        strict and complex dietary restrictions.
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-4">
        <a
          href="https://bitescout.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
        >
          See it at bitescout.com
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </a>
        <a href="#why" className="font-medium underline decoration-primary decoration-2 underline-offset-4">
          Why it matters
        </a>
      </div>

      <ul className="mt-14 grid gap-4 sm:grid-cols-3" aria-label="Places Bitescout finds">
        {placeTypes.map(({ label, icon: Icon }) => (
          <li key={label} className="flex items-center gap-4 rounded-xl border border-border bg-card p-5">
            <span className="flex size-11 items-center justify-center rounded-lg bg-secondary">
              <Icon className="size-5" aria-hidden="true" />
            </span>
            <span className="font-medium">{label}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
