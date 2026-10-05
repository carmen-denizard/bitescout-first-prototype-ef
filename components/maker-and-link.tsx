import { ArrowUpRight } from 'lucide-react'

export function MakerAndLink() {
  return (
    <section id="maker" className="mx-auto max-w-5xl px-6 py-20">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-border bg-card p-8">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">Who made it</h2>
          <div className="mt-6 flex items-center gap-4">
            <span
              className="flex size-14 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground"
              aria-hidden="true"
            >
              CD
            </span>
            <p className="text-2xl font-bold tracking-tight">Carmen Denizard</p>
          </div>
        </div>

        <a
          href="https://bitescout.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col justify-between rounded-2xl bg-foreground p-8 text-background"
        >
          <h2 className="text-sm font-semibold uppercase tracking-widest text-primary">See it or read more</h2>
          <span className="mt-6 flex items-center justify-between gap-4">
            <span className="text-2xl font-bold tracking-tight md:text-3xl">bitescout.com</span>
            <span className="flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
              <ArrowUpRight className="size-5" aria-hidden="true" />
              <span className="sr-only">(opens in a new tab)</span>
            </span>
          </span>
        </a>
      </div>
    </section>
  )
}
