// Import each section of the page from its own component file in /components.
import { FinderSection } from '@/components/finder-section'
import { GallerySection } from '@/components/gallery-section'
import { Hero } from '@/components/hero'
import { MakerAndLink } from '@/components/maker-and-link'
import { SiteHeader } from '@/components/site-header'
import { VideoSection } from '@/components/video-section'
import { WhyItMatters } from '@/components/why-it-matters'

// The home page ("/"). Next.js renders this component when someone visits the site.
export default function Page() {
  return (
    // <> ... </> is a "fragment": it groups elements without adding an extra HTML wrapper.
    <>
      {/* Top bar with the Bitescout logo and navigation links */}
      <SiteHeader />

      {/* <main> holds the primary content of the page, in the order it appears top to bottom */}
      <main>
        {/* Big intro: headline, description, and main call-to-action button */}
        <Hero />
        {/* Coral band explaining why Bitescout matters */}
        <WhyItMatters />
        {/* Space to embed a video */}
        <VideoSection />
        {/* Interactive demo: dietary checkboxes that filter the food spot cards */}
        <FinderSection />
        {/* Three square picture + text placeholders for you to fill in */}
        <GallerySection />
        {/* "Who made it" card and "See it or read more" link card */}
        <MakerAndLink />
      </main>

      {/* Footer at the very bottom of the page */}
      <footer className="border-t border-border">
        {/* Centered container; stacks text on mobile, places it side by side on small screens and up (sm:) */}
        <div className="mx-auto flex max-w-5xl flex-col gap-2 px-6 py-8 text-sm text-muted-foreground sm:flex-row sm:justify-between">
          <p>Bitescout</p>
          <p>Made by Carmen Denizard</p>
        </div>
      </footer>
    </>
  )
}
