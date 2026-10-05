// Next.js image component: automatically resizes and optimizes images for faster loading.
import Image from 'next/image'
// Picture icon shown inside each empty placeholder square.
import { ImageIcon } from 'lucide-react'

// Fill these in yourself. Put image files in /public (e.g. /images/photo-1.jpg) and set `image` to that path.
// Optional heading for this section. Leave it empty ('') to hide the heading.
const SECTION_TITLE = ''

// Describes the four fields each of the three gallery items has.
type GalleryItem = {
  // Path to the picture, e.g. '/images/photo-1.jpg'
  image: string
  // Short description of the picture for people using screen readers
  imageAlt: string
  // Title shown under the picture
  title: string
  // Paragraph text shown under the title
  text: string
}

// The three items in the gallery. All fields start empty, which shows the placeholder look.
const ITEMS: GalleryItem[] = [
  { image: '', imageAlt: '', title: '', text: '' },
  { image: '', imageAlt: '', title: '', text: '' },
  { image: '', imageAlt: '', title: '', text: '' },
]

export function GallerySection() {
  return (
    <section
      id="gallery"
      // If there's a heading, use it to name the section for screen readers; otherwise fall back to the name "Gallery".
      aria-labelledby={SECTION_TITLE ? 'gallery-heading' : undefined}
      aria-label={SECTION_TITLE ? undefined : 'Gallery'}
      className="mx-auto max-w-5xl px-6 pt-20"
    >
      {/* Only render the heading when SECTION_TITLE has text */}
      {SECTION_TITLE ? (
        <h2 id="gallery-heading" className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
          {SECTION_TITLE}
        </h2>
      ) : null}

      {/* Grid: 1 column on mobile, 3 columns on small screens and up. Adds top spacing only if there's a heading above. */}
      <ul className={`grid gap-6 sm:grid-cols-3 ${SECTION_TITLE ? 'mt-6' : ''}`}>
        {/* Create one gallery item for each entry in ITEMS */}
        {ITEMS.map((item, index) => (
          <li key={index} className="flex flex-col gap-4">
            {/* Square picture frame (aspect-square keeps width and height equal) */}
            <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-border bg-muted">
              {/* If an image path is set, show the picture; otherwise show the placeholder icon */}
              {item.image ? (
                <Image
                  src={item.image || '/placeholder.svg'}
                  alt={item.imageAlt}
                  // fill = stretch the image to fill the square frame
                  fill
                  // Tells the browser how wide the image will be so it downloads an appropriately sized file
                  sizes="(min-width: 640px) 33vw, 100vw"
                  // object-cover crops the image to fill the square without stretching it
                  className="object-cover"
                />
              ) : (
                // Placeholder: coral circle with a picture icon, centered in the square (hidden from screen readers)
                <div className="flex size-full items-center justify-center" aria-hidden="true">
                  <span className="flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <ImageIcon className="size-6" />
                  </span>
                </div>
              )}
            </div>

            {/* If a title or text is set, show them; otherwise show grey placeholder bars */}
            {item.title || item.text ? (
              <div className="flex flex-col gap-2">
                {item.title ? <h3 className="text-lg font-semibold text-foreground">{item.title}</h3> : null}
                {item.text ? <p className="leading-relaxed text-muted-foreground">{item.text}</p> : null}
              </div>
            ) : (
              // Three grey rounded bars that hint where the title and text will go (hidden from screen readers)
              <div className="flex flex-col gap-2" aria-hidden="true">
                <span className="h-4 w-2/3 rounded-full bg-muted" />
                <span className="h-3 w-full rounded-full bg-muted" />
                <span className="h-3 w-5/6 rounded-full bg-muted" />
              </div>
            )}
          </li>
        ))}
      </ul>
    </section>
  )
}
