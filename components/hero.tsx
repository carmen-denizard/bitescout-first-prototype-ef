// Icons: an arrow for the external link, plus one icon for each type of place.
import { ArrowUpRight, Store, Utensils, Warehouse } from 'lucide-react'

// The three kinds of places Bitescout finds, each paired with an icon. Used for the row of cards at the bottom.
const placeTypes = [
  { label: 'Restaurants', icon: Utensils },
  { label: 'Grocery stores', icon: Store },
  { label: 'Pantries', icon: Warehouse },
]

export function Hero() {
  return (
    // id="top" lets the header logo link scroll back up here. Extra top padding on medium screens and up (md:).
    <section id="top" className="mx-auto max-w-5xl px-6 pb-20 pt-16 md:pt-24">
      {/* Small vanilla custard pill label with a coral dot */}
      <p className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-sm font-medium">
        <span className="size-2 rounded-full bg-primary" aria-hidden="true" />
        Project overview
      </p>

      {/* Main headline. text-balance evens out line lengths; size grows from 4xl on mobile to 6xl on larger screens. */}
      <h1 className="mt-6 max-w-3xl text-balance text-4xl font-bold leading-tight tracking-tight md:text-6xl">
        Find food places that fit{' '}
        {/* "your diet" with a coral highlighter stripe behind it. whitespace-nowrap keeps the two words together. */}
        <span className="relative whitespace-nowrap">
          {/* The text sits on top (z-10)... */}
          <span className="relative z-10">your diet</span>
          {/* ...and this coral bar is positioned behind the bottom of the text as a highlight (decorative only) */}
          <span className="absolute inset-x-0 bottom-1 -z-0 h-3 bg-primary md:h-4" aria-hidden="true" />
        </span>
        .
      </h1>

      {/* Short description of the project */}
      <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
        Bitescout is a Google Maps-like web service that finds food-related places with accommodations for people with
        strict and complex dietary restrictions.
      </p>

      {/* Row of two links: the main button and a secondary text link. flex-wrap lets them wrap on narrow screens. */}
      <div className="mt-8 flex flex-wrap items-center gap-4">
        {/* Main coral button linking to bitescout.com in a new tab. It lifts up slightly on hover. */}
        <a
          href="https://bitescout.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
        >
          See it at bitescout.com
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </a>
        {/* Text link that jumps down to the "Why it matters" section, with a coral underline */}
        <a href="#why" className="font-medium underline decoration-primary decoration-2 underline-offset-4">
          Why it matters
        </a>
      </div>

      {/* Row of three cards (one per place type). 1 column on mobile, 3 columns on small screens and up. */}
      <ul className="mt-14 grid gap-4 sm:grid-cols-3" aria-label="Places Bitescout finds">
        {/* Create one card for each entry in placeTypes. `icon: Icon` renames it so it can be used as a component. */}
        {placeTypes.map(({ label, icon: Icon }) => (
          <li key={label} className="flex items-center gap-4 rounded-xl border border-border bg-card p-5">
            {/* Vanilla custard square holding the icon */}
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
