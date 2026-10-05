import { MapPin } from 'lucide-react'

export function SiteHeader() {
  return (
    <header className="border-b border-border">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
        <a href="#top" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <MapPin className="size-4" aria-hidden="true" />
          </span>
          Bitescout
        </a>
        <nav aria-label="Primary" className="flex items-center gap-6 text-sm">
          <a href="#why" className="hidden text-muted-foreground transition-colors hover:text-foreground sm:inline">
            Why it matters
          </a>
          <a href="#maker" className="hidden text-muted-foreground transition-colors hover:text-foreground sm:inline">
            Who made it
          </a>
          <a
            href="https://bitescout.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-foreground px-4 py-2 font-medium text-background transition-opacity hover:opacity-90"
          >
            Visit bitescout.com
          </a>
        </nav>
      </div>
    </header>
  )
}
