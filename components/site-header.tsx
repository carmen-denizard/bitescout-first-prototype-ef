// Map pin icon used in the logo.
import { MapPin } from 'lucide-react'

export function SiteHeader() {
  return (
    // <header> = the top bar of the site, with a thin line underneath it
    <header className="border-b border-border">
      {/* Centered container: logo on the left, navigation on the right */}
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
        {/* Logo: clicking it scrolls back to the top of the page (#top is the hero section) */}
        <a href="#top" className="flex items-center gap-2 font-semibold tracking-tight">
          {/* Coral rounded square with a map pin icon inside */}
          <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <MapPin className="size-4" aria-hidden="true" />
          </span>
          Bitescout
        </a>

        {/* Main navigation links. aria-label names it for screen readers. */}
        <nav aria-label="Primary" className="flex items-center gap-6 text-sm">
          {/* Jump links to sections of the page. `hidden sm:inline` hides them on phones and shows them on wider screens. */}
          <a href="#why" className="hidden text-muted-foreground transition-colors hover:text-foreground sm:inline">
            Why it matters
          </a>
          <a href="#maker" className="hidden text-muted-foreground transition-colors hover:text-foreground sm:inline">
            Who made it
          </a>
          {/* Dark pill button linking to bitescout.com in a new tab (always visible). Fades slightly on hover. */}
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
