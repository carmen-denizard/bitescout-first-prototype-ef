// Arrow icon used on the external link card.
import { ArrowUpRight } from 'lucide-react'

export function MakerAndLink() {
  return (
    // id="maker" lets the header's "Who made it" link scroll here.
    <section id="maker" className="mx-auto max-w-5xl px-6 py-20">
      {/* Two cards: stacked on mobile, side by side on medium screens and up (md:grid-cols-2) */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* ===== Card 1: "Who made it" (vanilla custard background) ===== */}
        <div className="rounded-2xl bg-secondary p-8 text-secondary-foreground">
          <h2 className="text-sm font-semibold uppercase tracking-widest">Who made it</h2>
          <div className="mt-6 flex items-center gap-4">
            {/* Coral circle with initials. Hidden from screen readers since the full name follows right after. */}
            <span
              className="flex size-14 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground"
              aria-hidden="true"
            >
              CD
            </span>
            <p className="text-2xl font-bold tracking-tight">Carmen Denizard</p>
          </div>
        </div>

        {/* ===== Card 2: the whole dark card is a link to bitescout.com (opens in a new tab) ===== */}
        {/* `group` lets child elements react when the card itself is hovered */}
        <a
          href="https://bitescout.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col justify-between rounded-2xl bg-foreground p-8 text-background"
        >
          <h2 className="text-sm font-semibold uppercase tracking-widest text-primary">See it or read more</h2>
          <span className="mt-6 flex items-center justify-between gap-4">
            <span className="text-2xl font-bold tracking-tight md:text-3xl">bitescout.com</span>
            {/* Coral circle with an arrow that nudges up and to the right when the card is hovered */}
            <span className="flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
              <ArrowUpRight className="size-5" aria-hidden="true" />
              {/* Hidden text that tells screen reader users the link opens a new tab */}
              <span className="sr-only">(opens in a new tab)</span>
            </span>
          </span>
        </a>
      </div>
    </section>
  )
}
