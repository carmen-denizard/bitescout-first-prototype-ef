import { GallerySection } from '@/components/gallery-section'
import { Hero } from '@/components/hero'
import { MakerAndLink } from '@/components/maker-and-link'
import { SiteHeader } from '@/components/site-header'
import { VideoSection } from '@/components/video-section'
import { WhyItMatters } from '@/components/why-it-matters'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <WhyItMatters />
        <VideoSection />
        <GallerySection />
        <MakerAndLink />
      </main>
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-5xl flex-col gap-2 px-6 py-8 text-sm text-muted-foreground sm:flex-row sm:justify-between">
          <p>Bitescout</p>
          <p>Made by Carmen Denizard</p>
        </div>
      </footer>
    </>
  )
}
